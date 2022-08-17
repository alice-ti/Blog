import nav from './nav'
import footer from './footer'
import { getDocs } from './sidebar'

const themeConfig = {
	nav,
	footer,
	sidebar: {
		'/docs/': getDocs('docs'),
		'/blog/': getDocs('blog')
	},

	// todo 需要申请 后续操作
	// 全文搜索配置
	// algolia: {},
	// 导航栏右侧社交链接配置
	socialLinks: [{ icon: 'github', link: '#' }],
	logo: '/logo/logo-v2.png',
	// 启动页面丝滑滚动
	smoothScroll: true
}

export default themeConfig
