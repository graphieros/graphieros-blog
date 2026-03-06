<script setup>
defineProps({
    articles: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <div>
        <div v-for="article in articles" :key="article.url" class="article-wrapper">
            <a :href="article.url" target="_blank" rel="noopener noreferrer">
                <h3>{{ article.title }}</h3>
            </a>
            <div>{{ article.authorHandle }}</div>
            <p>{{ article.description }}</p>
        </div>
    </div>
</template>

<style scoped>
.article-wrapper {
    padding: 0rem 2rem 1rem 2rem;
    border: 1px solid #8a8a8a;
    border-radius: 1rem;
    margin-bottom: 1rem;
}
</style>
