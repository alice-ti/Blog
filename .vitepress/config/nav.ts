const nav = [
	{ text: '精选好文', link: '/blog/blog/' },
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
				items: [{ text: '打工人日记', link: '/item-A1' }]
			}
		]
	},
	{
		text: 'Drop Menu',
		items: [
			{ text: 'Item A', link: '/item-1' },
			{ text: 'Item B', link: '/item-2' },
			{ text: 'Item C', link: '/item-3' }
		]
	}
]

export default nav
