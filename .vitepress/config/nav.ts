const nav = [
	{ text: '精选好文', link: '/currency/' },
	{
		text: '我的分类',
		items: [
			{
				items: [{ text: '技术万花筒', link: '/docs/HTML/' }]
			},
			{
				items: [{ text: '日常见闻录', link: '/news/' }]
			},
			{
				items: [{ text: 'BUG百宝袋', link: '/wrong/' }]
			},
			{
				items: [{ text: '农民工之魂', link: '/diary/miniapp/uniapp' }]
			}
		]
	},
	{ text: 'Tags', link: '/currency/tags' },
	{
		text: 'Drop Menu',
		items: [
			{ text: 'uniapp', link: '/diary/miniapp/uniapp' },
			{ text: '项目配置', link: '/diary/standard/base' },
			{ text: 'Item C', link: '/item-3' }
		]
	}
]

export default nav
