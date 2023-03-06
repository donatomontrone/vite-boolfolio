<template >
    <section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10">
                    <ProjectCard :project="project" :showButton="false" />
                </div>
                <div class="buttons text-center">
                    <router-link class="btn btn-outline-secondary" :to="{ name: 'projects' }">Back</router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'SingleProject',
    components: {
        ProjectCard
    },
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000',
            project: '',
            apiToken: 'dUr4I9yNTerbx0gun1Y2ZGQ6vQm56R1PpkUc0iaS9gYqN4Pd6g9X0YucE7xM'
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiUrl + `/api/projects/${this.$route.params.slug}`, {
                params: {
                    'api_token': this.apiToken,
                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.project = response.data.results;
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
    },
    created() {
        this.getProject();
    }
}
</script>
<style lang="scss"></style>