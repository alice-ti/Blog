# JSDoc 注释规范

> [中文传送门入口](https://www.jsdoc.com.cn/)  
> [英文传送门入口](https://jsdoc.app/)

## 示例

```javascript
/**
* @fileOverview 简单的方法标注示例
* @author <a href="#">Alice-Ti</a>
* @version 0.1
*/

/**
* @description 加法运算
* @param {Num} num1 加数
* @param {Num} num2 被加数
* @return {Num} result 结果
*/
function add(num1,num2){
    return num1 + num2;
}

/**
* @description 减法运算
* @param {Num} num1 减数
* @param {Num} num2 被减数
* @return {Num} result 结果
*/
function minus(num1,num2){
    return num1 – num2;
}
```

将 **描述注释** 和 **类型注释** 分开

```javascript
/**
 * @typedef ComplexObj
 * @property {object} a 对象a
 * @property {object} a.b 对象a.b
 * @property {number} a.b.c 数字a.b.c
 * @property {object} y 有一个对象y
 * @property {string} y.x 字符串
 * @property {string[]} z 字符串数组
 */

/**
 * 复杂的对象
 * @type {ComplexObj}
 */
const complexObj = {
  a: {
    b: {
      c: 1
    }
  },
  y: {
    x: 'hello'
  },
  z: ['r', 'y']
}

```

```javascript
/**
* @fileOverview 简单的类对象标注示例
* @author <a href="#">Alice-Ti</a>
* @version 0.1
*/

/**
* @author Alice-Ti
* @constructor Person
* @description 一个Person类
* @see The <a href="#">Alice-Ti</a >.
* @example new Parent(“张三”,15);
* @since version 1.0.0
* @param {String} username 姓名
* @param {Num} age 年龄
*/
function Person(username,age)
{
    /**
    * @description {Sting} 姓名
    * @field
    */
    this.username = username;
    
    /**
    * @description {Num} 年龄
    * @field
    */
    this.age = age;
    
    /**
    * @description 弹出say内容
    * @param {String} content 内容
    */
    this.say = function(content)
    {
        alert(this.username+” say :”+content);
    }
    
    /**
    * @description 返回json格式的对象
    * @return {String} json格式
    * @see Person#say
    */
    this.getJson = function(){
        return “{name:”+this.username+”,age”+this.age+”}”;
    }
}
```

## 通过「注释生成文档」

使用 **[docdown](https://github.com/jdalton/docdown)** 将注释转成 **markdown** 文件，然后用这些 **markdown** 文件生成 **html**.

## 附录

---

| 标签名                                                            | 使用范围   | 说明                                                                                    |
|-------------------------------------------------------------------|------------|-----------------------------------------------------------------------------------------|
| [@abstract](https://www.jsdoc.com.cn/tags-abstract)               | 类         | 父类上定义抽象属性，由子类来实现                                                        |
| [@access](https://www.jsdoc.com.cn/tags-access)                   | 文档       | @access < @access < package \| private \| protected \| public >                       |
| [@alias](https://www.jsdoc.com.cn/tags-alias)                     | 文档       | 标识A为B的昵称                                                                          |
| [@author](https://www.jsdoc.com.cn/tags-author)                   | 文档       | 作者名                                                                                  |
| [@borrows](https://www.jsdoc.com.cn/tags-borrows)                 | 文档       | 复制另一个注释的所有信息                                                                |
| [@copyright](https://www.jsdoc.com.cn/tags-copyright)             | 文档       | 版权信息                                                                                |
| [@deprecated](https://www.jsdoc.com.cn/tags-deprecated)           | 文档       | 标识已废弃                                                                              |
| [@description](https://www.jsdoc.com.cn/tags-description)         | 文档       | 描述。等同于注释最开始的描述，此标签优先级更高                                          |
| [@example](https://www.jsdoc.com.cn/tags-example)                 | 文档       | 可以用文本，或者代码写一个示例                                                          |
| [@exports](https://www.jsdoc.com.cn/tags-exports)                 | 文档       | 在非ES Module的模块规范下，标识导出的内容                                               |
| [@function](https://www.jsdoc.com.cn/tags-function)               | 文档       | 标识一个函数                                                                            |
| [@ignore](https://www.jsdoc.com.cn/tags-ignore)                   | 文档       | 标识某个对象、属性不在文档中展示                                                        |
| [@file](https://www.jsdoc.com.cn/tags-file)                       | 文档       | 一般用在文件开始，用来描述文件内容                                                      |
| [@enum](https://www.jsdoc.com.cn/tags-enum)                       | 文档       | 标识一个同类型集合                                                                      |
| [@license](https://www.jsdoc.com.cn/tags-license)                 | 文档       | 软件许可证                                                                              |
| [@package](https://www.jsdoc.com.cn/tags-package)                 | 文档       | package-private。即标识某个属性仅同目录可用。仅标识在输出文档。                         |
| [@readonly](https://www.jsdoc.com.cn/tags-readonly)               | 文档       | 标记一个只读属性                                                                        |
| [@summary](https://www.jsdoc.com.cn/tags-summary)                 | 文档       | @description 的简写版本                                                                 |
| [@generator](https://www.jsdoc.com.cn/tags-generator)             | 文档       | 标识一个生成器函数 (generator function)                                                 |
| [@see](https://www.jsdoc.com.cn/tags-see)                         | 文档       | 链接到某处                                                                              |
| [@since](https://www.jsdoc.com.cn/tags-since)                     | 文档       | 从某个版本开始支持                                                                      |
| [@tutorial](https://www.jsdoc.com.cn/tags-tutorial)               | 文档       | 类似锚点，指向文档中定义的锚点                                                          |
| [@version](https://www.jsdoc.com.cn/tags-version)                 | 文档       | 标识版本                                                                                |
| [@todo](https://www.jsdoc.com.cn/tags-todo)                       | 文档       | 记录一些待实现的功能，可以有多个                                                        |
| [@hideconstructor](https://www.jsdoc.com.cn/tags-hideconstructor) | 文档       | 在文档中隐藏类的构造器函数                                                              |
| [@constant](https://www.jsdoc.com.cn/tags-constant)               | 常量       | 标识一个常量，会自动识别类型                                                            |
| [@default](https://www.jsdoc.com.cn/tags-default)                 | 值引用变量 | 为单个值引用变量在文档中生成默认值                                                      |
| [@lends](https://www.jsdoc.com.cn/tags-lends)                     | 对象字面量 | 标识一个对象字面量为一个类（使用某个函数生成类，对象字面量为其参数）                    |
| [@async](https://www.jsdoc.com.cn/tags-async)                     | 函数       | 标识函数为异步函数，默认情况下无需使用，会自动识别。                                    |
| [@callback](https://www.jsdoc.com.cn/tags-callback)               | 函数       | 标识一个回调函数，使用与@typedef 类似                                                   |
| [@class](https://www.jsdoc.com.cn/tags-class)                     | 函数       | 标识一个函数为类                                                                        |
| [@classdesc](https://www.jsdoc.com.cn/tags-classdesc)             | 函数       | 类的描述，与@class搭配使用                                                              |
| [@param](https://www.jsdoc.com.cn/tags-param)                     | 函数       | 函数入参                                                                                |
| [@returns](https://www.jsdoc.com.cn/tags-returns)                 | 函数       | 函数的返回值标识                                                                        |
| [@throws](https://www.jsdoc.com.cn/tags-throws)                   | 函数       | 标识一个函数可能抛出的错误类型，可以有多个                                              |
| [@constructs](https://www.jsdoc.com.cn/tags-constructs)           | 对象字面量 | 一般配合@lends使用，标识一个函数为类的constructor                                       |
| [@augments](https://www.jsdoc.com.cn/tags-augments)               | 类         | 标识当前类的父类，同@extends                                                            |
| [@event](https://www.jsdoc.com.cn/tags-event)                     | 类         | 标识一个类中的事件                                                                      |
| [@fires](https://www.jsdoc.com.cn/tags-fires)                     | 类         | 标识在某个方法中会触发某个事件                                                          |
| [@inheritdoc](https://www.jsdoc.com.cn/tags-inheritdoc)           | 类，文档   | 标识子类继承父类的文档                                                                  |
| [@private](https://www.jsdoc.com.cn/tags-private)                 | 类         | 私有。与普通的属性不同，被标识的属性不会出现在输出文档中。                              |
| [@protected](https://www.jsdoc.com.cn/tags-protected)             | 类         | 标识为仅本模块可用。                                                                    |
| [@public](https://www.jsdoc.com.cn/tags-public)                   | 类         | 所有属性默认即为public。仅标识，如果需要标识范围，需使用@instance, @static, and @global |
| [@static](https://www.jsdoc.com.cn/tags-static)                   | 类         | 标识不会被实例化的类属性；或者模块中的某个属性。                                        |
| [@global](https://www.jsdoc.com.cn/tags-global)                   |            | 标识一个属性为全局属性，如标识一个局部属性为全局属性                                    |
| [@implements](https://www.jsdoc.com.cn/tags-implements)           |            | 标识类实现了哪个接口                                                                    |
| [@yields](https://www.jsdoc.com.cn/tags-yields)                   |            | 标识生成器函数的返回值                                                                  |
| [@type](https://www.jsdoc.com.cn/tags-type)                       |            | 标识一个类型                                                                            |
| [@external](https://www.jsdoc.com.cn/tags-external)               |            | 标识一个外部的对象，或者库。比如定义$为jQuery                                           |
| [@typedef](https://www.jsdoc.com.cn/tags-typedef)                 |            | 自定义类型。                                                                            |
| [@variation](https://www.jsdoc.com.cn/tags-variation)             |            | 如果出现了重名，例如命名空间和类，用此标识来区分                                        |
| [@this](https://www.jsdoc.com.cn/tags-this)                       |            | 标识当前作用域中this的指向                                                              |
| [@requires](https://www.jsdoc.com.cn/tags-requires)               |            | 标记当前模块依赖的模块，可以有多个                                                      |
| [@inner](https://www.jsdoc.com.cn/tags-inner)                     |            | 标记某属性为类、模块的内部属性                                                          |
| [@instance](https://www.jsdoc.com.cn/tags-instance)               |            | 标识为当前实例专属属性                                                                  |
| [@interface](https://www.jsdoc.com.cn/tags-interface)             |            | 标识一个可被实现的接口，接口可以只有注释，没有实体                                      |
| [@kind](https://www.jsdoc.com.cn/tags-kind)                       |            | 标识一个对象的类型                                                                      |
| [@listens](https://www.jsdoc.com.cn/tags-listens)                 |            | 标识监听了某个事件                                                                      |
| [@member](https://www.jsdoc.com.cn/tags-member)                   |            | 标识某个属性是对象的属性                                                                |
| [@memberof](https://www.jsdoc.com.cn/tags-memberof)               |            | 标识某个属性属于某个对象                                                                |
| [@mixes](https://www.jsdoc.com.cn/tags-mixes)                     |            | 标识当前对象混入了另一个对象                                                            |
| [@mixin](https://www.jsdoc.com.cn/tags-mixin)                     |            | 标识一个混入对象                                                                        |
| [@module](https://www.jsdoc.com.cn/tags-module)                   |            | 标记当前文件为一个模块                                                                  |
| [@name](https://www.jsdoc.com.cn/tags-name)                       |            | 覆盖命名一个变量。最好用在不在当前代码中声明的变量，也就是虚拟注释                      |
| [@namespace](https://www.jsdoc.com.cn/tags-namespace)             |            | 标识一个命名空间                                                                        |
| [@override](https://www.jsdoc.com.cn/tags-override)               |            | 子类覆盖父类的同名属性                                                                  |
| [@property](https://www.jsdoc.com.cn/tags-property)               |            | 给对象的某个属性添加标识，配合@typedef使用，可生成任意自定义对象                        |

---

[Types in JavaScript With Zod and JSDoc](https://blog.jim-nielsen.com/2023/types-in-jsdoc-with-zod/)
