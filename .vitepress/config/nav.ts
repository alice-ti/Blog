const nav = [
	{ text: '精选好文', link: '/files/blog/转载博客.md' },
	{
		text: '我的分类',
		items: [
			{
				items: [{ text: '万花筒', link: '/files/docs/HTML/01-html介绍' }]
			},
			{
				items: [{ text: '见闻录', link: '/files/news/月刊少女' }]
			},
			{
				items: [{ text: '百宝袋', link: '/files/diary/awesome/awesome常用合集' }]
			}
		]
	},
	{ text: 'Tags', link: '/files/currency/tags' },
	{
		text: 'Drop Menu',
		items: [
			{ text: 'uniapp', link: '/files/diary/miniapp/uniapp' },
			{ text: 'Basic setting', link: '/files/diary/standard/base' },
			{ text: 'browser', link: '/files/wrong/浏览器.md' }
		]
	}
]

export default nav
