# VO、DTO、BO、PO、DO区别

- **VO：**（View Object）视图对象，一般位于Controller层，用于展示视图。
- **DTO：**（Data Transfer Object）数据传输对象， 即RPC 接口请求或传输出去的对象，用于展示层与服务层之间的数据传输对象。
- **BO：**（Business Object）业务层对象，一般位于Service层，它与 DO 会有一定的属性差别。
- **PO：**（Persistent Object）持久化对象，对象属性与[数据库](https://cloud.tencent.com/solution/database?from_column=20065&from=20065)字段形成映射关系。
- **DO**：（Domain Object）领域对象，就是从现实世界中抽象出来的有形或无形的业务实体，可以当成BO；（Data Object**）**数据层对象，对象属性与数据库字段形成映射关系，可以当成PO

![图片](https://ask.qcloudimg.com/http-save/yehe-1481867/6b7b093d848976ca97ee6b3fdd9196fc.png)

### VO与DTO

**VO**：展示层需要展示的数据。 **DTO**：业务逻辑层需要接收的数据和返回的数据。 VO与DTO的属性值基本相同，但是VO是DTO的最终解释，可以对DTO的字段进行适当删减。
