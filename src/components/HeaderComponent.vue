<template>
    <header class="mb-3">
        <nav class="navbar navbar-expand-md navbar-light bg-body-tertiary shadow-sm shadow">
            <div class="container-fluid">
                <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'home' }">
                    <div class="img-logo">
                        <img :src="getImagePath('boolpress-logo.png')" class="img-fluid" alt="BoolPress logo">
                    </div>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li v-for="link in links" class="nav-item" :class="(this.$route.name == link.name) ? 'active' : ''">
                            <router-link class="nav-link fw-bold" :to="name = link.path">{{ link.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            links: [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'Project',
                    path: '/projects'
                },
                {
                    name: 'About Us',
                    path: '/about-us'
                },
            ]
        }
    },
    methods: {
        getImagePath(img) {
            return new URL((`../assets/${img}`), import.meta.url).href;
        },
    },
}
</script>
<style lang="scss">
div.img-logo {
    width: 150px;
}
</style>