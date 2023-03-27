import DefaultTheme from 'vitepress/theme'

import Tags from './components/Tags.vue'
import Tools from './components/Tools.vue'

import './custom.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component('Tags', Tags)
		app.component('Tools', Tools)
	}
}
