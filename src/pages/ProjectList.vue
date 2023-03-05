<template >
    <div class="container">
        <div class="row">
            <ProjectCard v-for="project in projects" :project="project" />
            <nav aria-label="pagination">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" @click="prevPage()">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" @click="nextPage()">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "ProjectList",
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [],
            apiUrl: "http://127.0.0.1:8000",
            page: 1,
            lastPage: '',
        };
    },
    methods: {
        getProjects() {
            axios.get(this.apiUrl + '/api/projects/', {
                params: {
                    page: this.page,
                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                    this.lastPage = response.data.results.last_page;
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        prevPage() {
            if (this.page > 1) {
                this.page -= 1
                this.getProjects()
            }
        },
        nextPage() {
            if (this.page < this.lastPage) {
                this.page += 1
                this.getProjects();
            }
        }
    },
    created() {
        this.getProjects();
    }
}
</script>
<style lang="scss"></style>
