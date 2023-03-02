<template>
  <main v-for="project in projects"> {{ project.name }} </main>
</template>
<script>
import axios from 'axios';
export default {
  name: 'AppMain',
  data() {
    return {
      projects: [],
      apiUrl: 'http://127.0.0.1:8000/api/projects/'
    }
  },

  methods: {
    getProjects() {
      axios.get(this.apiUrl, {
        params: {
        }
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