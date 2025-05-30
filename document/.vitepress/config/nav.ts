const nav = [
	{ text: '精选好文', link: '/blog/转载博客.md' },
	{
		text: '我的分类',
		items: [
			{
				items: [{ text: '万花筒', link: '/docs/HTML/01-html介绍' }]
			},
			{
				items: [{ text: '见闻录', link: '/notes/2023月刊少女' }]
			},
			{
				items: [{ text: '百宝袋', link: '/program/awesome/awesome常用合集' }]
			}
		]
	},
	{ text: 'wx', link: '/experience/wx对接' },
	{
		text: 'Drop Menu',
		items: [
			{ text: 'Uniapp', link: '/program/miniapp/uniapp' },
			{ text: 'Basic setting', link: '/program/standard/01-baseConfig' },
			{ text: 'More Settings', link: '/program/standard/02-replenishConfig' },
			{ text: 'JsDoc', link: '/program/standard/jsdoc' },
			{ text: 'Browser', link: '/experience/浏览器' }
		]
	}
]

export default nav
