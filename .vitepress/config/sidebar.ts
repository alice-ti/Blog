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
	['Network', 60],
	['Node', 60]
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
export const getDocs = (link: string) => {
	const arr = getFilePaths(link)
	return arr.sort((a, b) => (a as SidebarMenu)!.weight - (b as SidebarMenu).weight)
}

/**
 * @description 获取docs路径
 * @returns
 */
const getFilePaths = (entry: string, result: Array<SidebarItem | SidebarMenu> = []) => {
	const paths = fs.readdirSync(entry)
	paths.forEach((ele: string) => {
		const location = path.join(entry, ele)
		const info = fs.statSync(location)

		let obj: SidebarItem | SidebarMenu = { text: path.basename(ele, path.extname(ele)), link: location }

		// 嵌套
		if (info.isDirectory()) {
			const items = getFilePaths(location)
			obj = {
				text: ele,
				collapsible: true,
				collapsed: true,
				weight: docsMap.get(ele) || 0,
				items
			} as SidebarMenu
		}
		result!.push(obj)
	})
	return result.sort((fir, sec) => parseInt(fir.text) - parseInt(sec.text))
}

export const getDirDocs = (link: string) => {
	const arr = getFilePaths(link)
	const sort_arr = arr.sort((a, b) => (a as SidebarMenu)!.weight - (b as SidebarMenu).weight)
	return [{ items: sort_arr }]
}
