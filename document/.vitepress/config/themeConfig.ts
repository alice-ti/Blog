import nav from './nav'
import sidebar from './sidebar'

// https://vitepress.dev/reference/default-theme-config
const themeConfig = {
	// nav: [
	// 	{ text: 'Home', link: '/' },
	// 	{ text: 'Examples', link: '/markdown-examples' }
	// ],
	// sidebar: [
	// 	{
	// 		text: 'Examples',
	// 		items: [
	// 			{ text: 'Markdown Examples', link: '/markdown-examples' },
	// 			{ text: '01-HM', link: '/docs/AIGC/TTS' },
	// 			{ text: 'Runtime API Examples', link: '/api-examples' }
	// 		]
	// 	}
	// ],

	nav,
	sidebar,

	socialLinks: [{ icon: 'github', link: 'https://github.com/alice-ti/Blog' }]
}

export default themeConfig
