import nav from './nav'
import footer from './footer'
import { getDocs, getDirDocs } from './sidebar'

const themeConfig = {
	nav,
	footer,
	sidebar: {
		'/files/docs/': getDocs('files/docs'),
		'/files/news/': [{ items: getDirDocs('files/news/') }]
	},

	// todo 需要申请 后续操作
	// 全文搜索配置
	// algolia: {},
	// 导航栏右侧社交链接配置
	socialLinks: [{ icon: 'github', link: '#' }],
	logo: '/logo/logo-v2.png',
	// 启动页面丝滑滚动
	smoothScroll: true,
	// 最后更新
	lastUpdatedText: '上次更新',
	// 上一页/下一页
	// docFooter: { prev: '上一篇', next: '下一篇' }
}

export default themeConfig
