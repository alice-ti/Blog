import path from "path"
import fs from "fs";

const getDocs = () => {
  const paths = getFilePaths('docs')
  // console.log(paths);
  return paths
}

/**
 * @description 获取docs路径
 * @returns
 */
const getFilePaths = (entry, result = []) => {
  const paths = fs.readdirSync(entry)
  // console.log(paths);
  paths.map((ele, idx) => {
    const location = path.join(entry, ele)
    const info = fs.statSync(location)
    if (info.isDirectory()) {
      // console.log(`dir: ${location}`)
      const items = getFilePaths(location)
      // console.log("我是item_____", items);
      result.push({
        text: ele,
        collapsible: true,
        collapsed: true,
        items
      })

    } else {
      // console.log(`file: ${location}`)
      result.push({
        text: ele, link: location
      })
    }
  })
  return result
  // return paths.filter((item) => item.includes("docs/"))
}

export { getDocs }
