<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="navigation-buttons d-flex justify-content-between mb-3">
          <a href="#!" @click="prevPage()" class="btn btn-outline-dark">Prev</a>
          <a href="#!" @click="nextPage()" class="btn btn-outline-dark">Next</a>
        </div>
        <ProjectCard v-for="project in projects" :projectInfo="project" />
        <div class="navigation-buttons d-flex justify-content-between mt.3">
          <a href="#" @click="prevPage()" class="btn btn-outline-dark">Prev</a>
          <a href="#" @click="nextPage()" class="btn btn-outline-dark">Next</a>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
  name: "AppMain",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
      apiUrl: "http://127.0.0.1:8000/api/projects/",
      page: 1,
      lastPage: '',
    };
  },
  methods: {
    getProjects() {
      axios.get(this.apiUrl, {
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
<style lang="scss" scoped></style>