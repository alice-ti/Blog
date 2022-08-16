import { defineConfig } from 'vitepress'
import { getDocs } from './utils/sidebar'

const config = {
	// ...
	// 网站标题
	title: 'Alice-Ti',
	// 网站描述
	description: 'Xaku with vitePress',
	// 打包目录
	dest: '/dist',
	base: '/',
	logo: '/public/logo.png',
	// 头部head
	head: [
		// 添加图标
		['link', { rel: 'icon', href: '/favicon.ico' }],
	],

	// 主题配置
	themeConfig: {
		// 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
		lastUpdated: 'Last Updated', // string | boolean

		// todo 需要申请 后续操作
		// 全文搜索配置
		// algolia: {},
		// 导航栏右侧社交链接配置
		socialLinks: [
			{ icon: 'github', link: '#' },
		],
		// 启动页面丝滑滚动
		smoothScroll: true,
		// 导航栏配置
		nav: [
			{ text: 'blog', link: '/docs/HTML/' },
			{ text: 'Github', link: '#' },
			{
				text: 'Drop Menu',
				items: [
					{ text: 'Item A', link: '/item-1' },
					{ text: 'Item B', link: '/item-2' },
					{ text: 'Item C', link: '/item-3' },
				],
			},
			{
				text: 'Drop Menu',
				items: [
					{
						items: [
							{ text: 'Item A1', link: '/item-A1' },
							{ text: 'Item A2', link: '/item-A2' },
						],
					},
					{
						items: [
							{ text: 'Item B1', link: '/item-B1' },
							{ text: 'Item B2', link: '/item-B2' },
						],
					},
				],
			},
		],
		// 侧边栏
		// sidebar: [],
		// 页脚
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2022-present Alice Ti',
		},
	},
}

// 侧边栏
config.themeConfig.sidebar = { '/docs/': getDocs() }

export default defineConfig(config)
