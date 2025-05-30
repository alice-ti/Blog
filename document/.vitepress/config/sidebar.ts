import type { DefaultTheme } from 'vitepress'
import { readdirSync, statSync } from 'node:fs'
import { join, extname, basename, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// 目录排序映射
const docsMap = new Map([
	['HTML', 0],
	['CSS', 5],
	['JavaScript', 10],
	['Vue', 15],
	['React', 20],
	['TypeScript', 25],
	['Webpack', 30],
	['Vite', 45],
	['Miniapp', 55],
	['Network', 60],
	['Node', 60],
	['Web', 70],
	['NestJs', 75],
	['NextJs', 80]
])

interface BlogPost extends DefaultTheme.SidebarItem {
	date?: string
	order?: number
	fileOrder?: number // 文件序号
}

// 扫描目录生成侧边栏项
const scanDirectory = (dirPath: string, urlPrefix: string): DefaultTheme.SidebarItem[] => {
	const items: BlogPost[] = []
	const files = readdirSync(dirPath)

	files.forEach((file) => {
		const fullPath = join(dirPath, file)
		const stat = statSync(fullPath)

		if (stat.isDirectory()) {
			const subItems = scanDirectory(fullPath, urlPrefix)
			if (subItems.length > 0) {
				// 只添加非空目录
				items.push({
					text: file,
					collapsed: true,
					items: subItems,
					order: docsMap.get(file) ?? 999 // 使用映射中的排序值，如果没有则排到最后
				})
			}
		} else if (extname(file) === '.md' && file !== 'index.md') {
			const fileName = basename(file, '.md')
			// 获取相对于基础目录的路径
			const relativePath = relative(docsPath, dirPath).replace(/\\/g, '/')
			const link = relativePath
				? `${urlPrefix}/${relativePath}/${fileName}`.replace(/\\/g, '/')
				: `${urlPrefix}/${fileName}`.replace(/\\/g, '/')

			// 提取序号的通用函数
			const getFileOrder = (name: string): number | undefined => {
				const match = name.match(/^(\d+)-/)
				return match ? parseInt(match[1]) : undefined
			}

			// 支持多种文件命名格式
			const newFormatMatch = fileName.match(/^(?:(\d+)-)?(.+?)-(\d{4}-\d{2}-\d{2})$/) // [序号]-title-YYYY-MM-DD
			const oldDateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/) // YYYY-MM-DD-title
			const numberMatch = fileName.match(/^(\d+-)?(.*?)$/) // [序号-]标题

			const fileOrder = getFileOrder(fileName)

			if (newFormatMatch) {
				items.push({
					text: newFormatMatch[2], // 标题
					link,
					date: newFormatMatch[3], // 日期
					fileOrder
				})
			} else if (oldDateMatch) {
				items.push({
					text: oldDateMatch[2],
					link,
					date: oldDateMatch[1],
					fileOrder
				})
			} else if (numberMatch) {
				items.push({
					text: numberMatch[2],
					link,
					fileOrder
				})
			} else {
				items.push({
					text: fileName,
					link,
					fileOrder
				})
			}
		}
	})

	// 优化排序逻辑
	return items.sort((a, b) => {
		// 如果都是目录（都有order），按order排序
		if (a.order !== undefined && b.order !== undefined) {
			return a.order - b.order
		}
		// 如果只有一个是目录，目录排在前面
		if (a.order !== undefined) return -1
		if (b.order !== undefined) return 1

		// 文件排序：序号 > 日期 > 名称
		// 如果都有序号，按序号排序
		if (a.fileOrder !== undefined && b.fileOrder !== undefined) {
			return a.fileOrder - b.fileOrder
		}
		// 如果只有一个有序号，有序号的排在前面
		if (a.fileOrder !== undefined) return -1
		if (b.fileOrder !== undefined) return 1
		// 如果都有日期，按日期倒序
		if (a.date && b.date) {
			return b.date.localeCompare(a.date)
		}
		// 最后按文件名排序
		return (a.text || '').toLowerCase().localeCompare((b.text || '').toLowerCase())
	})
}

const docsPath = resolve(__dirname, '../../../document/docs')
const blogPath = resolve(__dirname, '../../../document/blog')

// [序号-]title[-YYYY-MM-DD]
const sidebar: DefaultTheme.Config['sidebar'] = {
	'/docs/': [
		{
			text: 'DOCS',
			items: scanDirectory(docsPath, '/docs')
		}
	],
	'/blog/': [
		{
			text: 'Blog',
			items: scanDirectory(blogPath, '/blog')
		}
	]
}

export default sidebar
