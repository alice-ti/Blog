import { defineConfig } from 'vitepress'
import head from './config/head'
import footer from './config/footer'
import themeConfig from './config/themeConfig'

const config = {
	head,
	footer,
	// ...
	// 网站标题
	title: 'Alice-Ti',
	// 网站描述
	description: 'Xaku with vitePress',
	// 打包目录
	dest: '/dist',
	// base: '/Blog/', // github.io/Blog
	base: '/',
	// 忽略死链接
	ignoreDeadLinks: true,
	// 上次更新时间
	lastUpdated: true,

	// 主题配置
	themeConfig
}

export default defineConfig(config)
