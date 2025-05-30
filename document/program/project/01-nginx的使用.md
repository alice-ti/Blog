# Nginx

## 代理与反向代理

### 正向代理

正向代理（**forward proxy**）是一个位于客户端和目标服务器之间的服务器(代理服务器)，为了从目标服务器取得内容，客户端向代理服务器发送一个请求并指定目标，然后代理服务器向目标服务器转交请求并将获得的内容返回给客户端。

> **正向代理，"代理服务器"代理了"客户端"，去和"目标服务器"进行交互。**

#### **正向代理的用途**

- **突破访问限制**
- **提高访问速度**
- **隐藏客户端真实IP**

### 反向代理

反向代理（**Reverse Proxy**）方式是指以代理服务器来接受 **internet** 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 **internet** 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。

> **反向代理，"代理服务器"代理了"目标服务器"，去和"客户端"进行交互。**

### **反向代理的用途**

- **隐藏服务器真实IP**
- **负载均衡**
- **提高访问速度**
- **提供安全保障**

### **正向代理和反向代理的区别**

1、**正向代理其实是客户端的代理**，帮助客户端访问其无法访问的服务器资源。**反向代理则是服务器的代理**，帮助服务器做负载均衡，安全防护等。

2、**正向代理一般是客户端架设的**，比如在自己的机器上安装一个代理软件。而**反向代理一般是服务器架设的**，比如在自己的机器集群中部署一个反向代理服务器。

3、**正向代理中，服务器不知道真正的客户端到底是谁**，以为访问自己的就是真实的客户端。而在**反向代理中，客户端不知道真正的服务器是谁**，以为自己访问的就是真实的服务器。

4、正向代理和反向代理的作用和目的不同。**正向代理主要是用来解决访问限制问题。而反向代理则是提供负载均衡、安全防护等作用。二者均能提高访问速度。**

### 网站有多个 webapp 的配置

假如 <www.alice-ti.com站点有好几个> webapp，finance（金融）、product（产品）、admin（用户中心）。访问这些应用的方式通过上下文(context)来进行区分:

<www.alice-ti.com/finance/>

<www.alice-ti.com/product/>

<www.alice-ti.com/admin/>

```bash
http {
 #此处省略一些基本配置

 upstream product_server{
  server www.alice-ti.com:8081;
 }

 upstream admin_server{
  server www.alice-ti.com:8082;
 }

 upstream finance_server{
  server www.alice-ti.com:8083;
 }

 server {
  #此处省略一些基本配置
  #默认指向product的server
  location / {
   proxy_pass http://product_server;
  }

  location /product/{
   proxy_pass http://product_server;
  }

  location /admin/ {
   proxy_pass http://admin_server;
  }

  location /finance/ {
   proxy_pass http://finance_server;
  }
 }
}
```

## nginx常用命令

```bash
nginx -s stop       快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
nginx -s quit       平稳关闭Nginx，保存相关信息，有安排的结束web服务。
nginx -s reload     因改变了Nginx相关配置，需要重新加载配置而重载。
nginx -s reopen     重新打开日志文件。
nginx -c filename   为 Nginx 指定一个配置文件，来代替缺省的。
nginx -t            不运行，仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。
nginx -v            显示 nginx 的版本。
nginx -V            显示 nginx 的版本，编译器版本和配置参数。
```

要获取所有运行的nginx进程的列表，可以使用`ps`命令，例如，以下列方式：

```bash
ps -ax | grep nginx
```

相关文章

---

[nginx 教程](https://github.com/dunwu/nginx-tutorial)

[终于有人把正向代理和反向代理解释的明明白白了！](https://cloud.tencent.com/developer/beta/article/1418457)
