// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Tags from './components/Tags.vue'
import Tools from './components/Tools.vue'

import './style.css'
import './custom.css'

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		})
	},
	enhanceApp({ app, router, siteData }) {
		// ...

		app.component('Tags', Tags)
		app.component('Tools', Tools)
	}
} satisfies Theme
