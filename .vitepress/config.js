import { defineConfig } from 'vitepress'
import themeConfig from './config/themeConfig'

const config = {
	// ...
	// 网站标题
	title: 'Alice-Ti',
	// 网站描述
	description: 'Xaku with vitePress',
	// 打包目录
	dest: '/dist',
	// base: '/Blog/', // github.io/Blog
	base: '.',
	// 头部head
	head: [
		// 添加图标
		['link', { rel: 'icon', href: '/favicon.ico' }]
	],
	// 忽略死链接
	ignoreDeadLinks: true,
	// 上次更新时间
	lastUpdated: true,

	// 主题配置
	themeConfig
}

export default defineConfig(config)
