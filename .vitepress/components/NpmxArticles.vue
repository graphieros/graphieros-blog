<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    articles: Array
})

</script>

<template>
    <div>
        <div v-for="article in articles" class="article-wrapper">
            <a href="article.url">
                <h3>{{ article.title }}</h3>
            </a>
            <div>{{ article.authorHandle }}</div>
            <p>
                {{ article.description }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.article-wrapper {
    padding: 0rem 2rem 1rem 2rem;
    border: 1px solid #8A8A8A;
    border-radius: 1rem;
    margin-bottom: 1rem;
}
</style>