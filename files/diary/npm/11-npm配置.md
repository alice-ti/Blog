# npm 配置

## npm 查看全局路径

- 查看当前npm包的全局安装路径

    ```shell
    npm prefix -g 
    ```

- 查看当前npm包的全局cache路径

    ```shell
    npm config get cache
    ```

- 查看配置列表

    ```shell
    npm config ls
    ```

- 查看配置列表的全部信息

    ```shell
    npm config ls -l
    ```

## npm修改全局路径命令

- 修改npm的包的全局安装路径

    ```shell
    npm config set prefix "D:\Program Files\DevTools\node.js\node_global"
    ```

- 修改npm的包的全局cache位置

    ```shell
    npm config set cache "D:\Program Files\DevTools\node.js\node_cache"
    ```

---
[Node.js与统一的全局模块安装路径的配置](https://www.jianshu.com/p/f5a7cedba59b)
