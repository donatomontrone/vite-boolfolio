<template >
    <section class="homepage-content">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8 text-center">
                    <h1 class="text-focus-in">Welcome in BoolPress</h1>
                    <h4 class="text-focus-in">Here you can see all the projects managed by our platform</h4>
                    <p class="text-focus-in">Browse and discover</p>
                </div>
                <div class="col-8">
                    <img :src="getImagePath('profile-screen.png')" alt="progile screen"
                        class="img-fluid slide-in-blurred-bottom pt-5 mt-5">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        getImagePath(img) {
            return new URL((`../assets/${img}`), import.meta.url).href;
        },
    },
}
</script>
<style lang="scss">
h1 {
    padding-top: 5rem;
    font-size: 3rem;
}

p {
    font-size: .85rems;
}

.text-focus-in {
    -webkit-animation: text-focus-in 1.5s ease-in-out both;
    animation: text-focus-in 1.5s ease-in-out both;
}

@-webkit-keyframes text-focus-in {
    0% {
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
    }

    100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
    }
}

@keyframes text-focus-in {
    0% {
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
    }

    100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
    }
}


.slide-in-blurred-bottom {
    -webkit-animation: slide-in-blurred-bottom 1.8s linear 2s both;
    animation: slide-in-blurred-bottom 1.8s linear 2s both;
}

@-webkit-keyframes slide-in-blurred-bottom {
    0% {
        -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
        transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-filter: blur(40px);
        filter: blur(40px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
        transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
    }
}

@keyframes slide-in-blurred-bottom {
    0% {
        -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
        transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-filter: blur(40px);
        filter: blur(40px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
        transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
    }
}
</style>