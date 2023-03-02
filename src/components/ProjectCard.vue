<template>
    <div class="col-12">
        <div class="card mb-3">
            <div class="row">
                <div class="col-12"></div>
                <div class="col-md-4">
                    <img v-if="projectInfo.preview.startsWith('img')"
                        :src="'http://127.0.0.1:8000/storage/' + projectInfo.preview" class="img-fluid rounded-start"
                        :alt="projectInfo.names">
                    <img v-else :src="projectInfo.preview" class="img-fluid rounded-start" :alt="projectInfo.names">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="badge bg-secondary">{{ projectInfo?.type?.name || 'Empty' }}</h6>
                        <h5 class="card-title">{{ projectInfo.name }}</h5>
                        <p class="card-text">GitHub URL: <a :href="projectInfo.github_url">{{ projectInfo.github_url }}</a>
                        </p>
                        <p class="card-text">Difficulty: {{ projectInfo.difficulty_id }}/5</p>
                        <p class="card-text"><small class="text-muted"> Published on {{ projectInfo.publication_date
                        }}</small></p>
                        <span v-if="projectInfo.technologies.length > 0" v-for="technology in projectInfo.technologies"
                            class="badge rounded-pill me-1" :style="{ 'background-color': technology.color }">#{{
                                technology.name }}</span>
                        <span v-else class="badge rounded-pill text-bg-warning"> NO TAGS</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProjectCard',
    props: ['projectInfo'],

}
</script>
<style lang="scss" scoped></style>