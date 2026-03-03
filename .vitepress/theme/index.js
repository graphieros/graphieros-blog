import DefaultTheme from 'vitepress/theme'
import './custom.css'
import NpmxArticles from '../components/NpmxArticles.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
    app.component('NpmxArticles', NpmxArticles)
  }
}