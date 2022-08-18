import DefaultTheme from 'vitepress/theme'

import Tags from './components/Tags.vue'

import './custom.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
    app.component('Tags', Tags)
	}
}
