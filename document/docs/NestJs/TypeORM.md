# [TypeORM](https://typeorm.bootcss.com/)

## 查询示例

1. 基础查询方法：

```typescript
// 查询单条记录
const user = await userRepository.findOne({
  where: { id: 1 }
});

// 查询多条记录
const users = await userRepository.find({
  where: { status: 'active' }
});

// 查询并确保存在（会抛出异常）
const user = await userRepository.findOneOrFail({
  where: { id: 1 }
});
```

2. QueryBuilder 方式（更灵活的查询）

```typescript
// 复杂查询
const users = await userRepository
  .createQueryBuilder('user')
  .where('user.status = :status', { status: 'active' })
  .andWhere('user.age > :age', { age: 18 })
  .orderBy('user.createTime', 'DESC')
  .getMany();

// 带关联的查询
const posts = await postRepository
  .createQueryBuilder('post')
  .leftJoinAndSelect('post.author', 'author')
  .where('author.id = :id', { id: 1 })
  .getMany();
```

3. 分页查询

```typescript
// 使用 find
const [users, total] = await userRepository.findAndCount({
  skip: (page - 1) * pageSize,
  take: pageSize,
  where: { status: 'active' }
});

// 使用 QueryBuilder
const [users, total] = await userRepository
  .createQueryBuilder('user')
  .skip((page - 1) * pageSize)
  .take(pageSize)
  .getManyAndCount();
```

4. 关联查询

```typescript
// 使用 find with relations
const post = await postRepository.findOne({
  where: { id: 1 },
  relations: ['author', 'comments']
});

// 使用 QueryBuilder
const post = await postRepository
  .createQueryBuilder('post')
  .leftJoinAndSelect('post.author', 'author')
  .leftJoinAndSelect('post.comments', 'comments')
  .where('post.id = :id', { id: 1 })
  .getOne();
```

5. 自定义查询条件

```typescript
// 使用 Like
const users = await userRepository.find({
  where: {
    username: Like('%john%')
  }
});

// 使用 In
const users = await userRepository.find({
  where: {
    id: In([1, 2, 3])
  }
});
```

查询数据

```typescript
// 只选择需要的字段
const users = await userRepository
  .createQueryBuilder('user')
  .select(['user.id', 'user.username'])
  .getMany();

// 使用索引
await userRepository.find({
  where: { indexedColumn: value }
});

// 添加适当的关联条件
await userRepository.find({
  relations: ['posts'],
  where: { 
    posts: { isPublished: true } 
  }
});
```

错误处理

```typescript
try {
  const user = await userRepository.findOneOrFail({
    where: { id: 1 }
  });
} catch (error) {
  // 处理未找到的情况
  console.error('User not found');
}
```

### SUMMARY

简单查询用 find/findOne：

- 当查询条件简单
- 不需要复杂的关联
- 不需要特别的查询优化

使用 QueryBuilder：

- 需要复杂的查询条件
- 需要优化查询性能
- 需要自定义 SQL
- 需要复杂的关联查询
