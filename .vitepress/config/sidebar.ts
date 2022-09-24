import path from 'path'
import fs from 'fs'

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
	['Network', 60]
])

type SidebarMenu = {
	text: string
	collapsible: boolean
	collapsed: boolean
	items: SidebarItem[]
	weight: number
}

type SidebarItem = {
	text: string
	link: string
}

/**
 * @description 返回侧边栏
 * @param link
 * @returns
 */
const getDocs = (link: string) => {
	const arr = getFilePaths(link)
	return arr.sort((a, b) => (a as SidebarMenu)!.weight - (b as SidebarMenu).weight)
}

/**
 * @description 获取docs路径
 * @returns
 */
const getFilePaths = (entry: string, result: Array<SidebarItem | SidebarMenu> = []) => {
	const paths = fs.readdirSync(entry)
	paths.map((ele: string) => {
		const location = path.join(entry, ele)
		const info = fs.statSync(location)
		if (info.isDirectory()) {
			const items = getFilePaths(location)
			result!.push({
				text: ele,
				collapsible: true,
				collapsed: true,
				weight: docsMap.get(ele) || 0,
				items
			} as SidebarMenu)
		} else {
			result!.push({
				text: path.basename(ele, path.extname(ele)),
				link: location
			})
		}
	})
	return result
}

export { getDocs }
