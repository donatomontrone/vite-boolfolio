<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4 text-center">
                <img v-if="project.preview.startsWith('img')" :src="'http://127.0.0.1:8000/storage/' + project.preview"
                    class="img-fluid rounded-start" :alt="project.names">
                <img v-else :src="project.preview" class="img-fluid rounded" :alt="project.names">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h6 class="badge bg-secondary">{{ project?.type?.name || 'Empty' }}</h6>
                    <h5 class="card-title">{{ project.name }}</h5>
                    <p class="card-text">GitHub URL: <a :href="project.github_url">{{ project.github_url }}</a>
                    </p>
                    <p class="card-text">Difficulty: {{ project.difficulty_id }}/5</p>
                    <p class="card-text"><small class="text-muted"> Published on {{ project.publication_date }}</small>
                    </p>
                    <span v-if="project.technologies.length > 0" v-for="technology in project.technologies"
                        class="badge rounded-pill me-1" :style="{ 'background-color': technology.color }">#{{
                            technology.name }}</span>
                    <span v-else class="badge rounded-pill text-bg-warning"> NO TAGS</span>
                </div>
                <div v-if="showButton" class="buttons text-center py-3">
                    <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="btn btn-outline-primary">
                        Open detail </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProjectCard',
    props:
    {
        'project': {
            type: Object,
            required: true,
        },
        'showButton': {
            type: Boolean,
            required: false,
            default: true,
        },
    }
}
</script>
<style lang="scss" scoped></style>