import { defineConfig } from 'vitepress'
import themeConfig from './config/themeConfig'
import head from './config/head'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head,

	title: 'Alice-Ti',

	description: '爱丽丝梦游仙境',

	// base: '/Blog/', // github.io/Blog
	base: '/',

	// 忽略死链接
	ignoreDeadLinks: true,

	// 上次更新日期
	lastUpdated: true,

	markdown: {
		// 代码块显示行号
		lineNumbers: false,
		// 语法高亮主题
		theme: {
			light: 'github-light',
			dark: 'github-dark'
		}
	},

	themeConfig
})
