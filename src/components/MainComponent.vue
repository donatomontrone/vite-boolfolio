<template>
  <main>
    <div class="container">
      <div class="row">
        <ProjectCard v-for="project in projects" :projectInfo="project" />
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
      apiUrl: "http://127.0.0.1:8000/api/projects/"
    };
  },
  methods: {
    getProjects() {
      axios.get(this.apiUrl, {
        params: {}
      })
        .then((response) => {
          console.log(response.data.results.data);
          this.projects = response.data.results.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },
  created() {
    this.getProjects();
  }
}
</script>
<style lang="scss" scoped></style>