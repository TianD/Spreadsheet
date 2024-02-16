以下是`usePagination` hook的详细文档：

**Options (PaginationProps)**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `pageSize` | `number` | 每页的项目数量 | 是 |
| `initialPage` | `number` | 初始页面索引，从1开始 | 否 |
| `total` | `number` | 总行数 | 是 |
| `onChange` | `(page: number) => void` | 页面改变时的回调函数 | 否 |
| `component` | `React.FC<PaginationComponentProps> \| React.ComponentClass<PaginationComponentProps>` | 分页组件 | 否 |

**Results (PaginationResults)**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| `currentPage` | `number` | 当前页码 |
| `totalPages` | `number` | 总页数 |
| `pageSize` | `number` | 每页的项目数量 |
| `paginationComponent` | `React.ReactNode` | 分页组件 |
| `nextPage` | `() => void` | 导航到下一页的函数 |
| `prevPage` | `() => void` | 导航到上一页的函数 |
| `goToFirst` | `() => void` | 导航到第一页的函数 |
| `goToLast` | `() => void` | 导航到最后一页的函数 |
| `goToPage` | `(page: number) => void` | 导航到指定页的函数 |

**使用方法**

```typescript
usePagination({
  pageSize: 10,
  initialPage: 1,
  total: 100,
  onChange: (page) => {
    console.log('Current page:', page);
  },
  // 其他选项...
})
```

在这个例子中，`usePagination` hook被用于处理分页操作。你需要提供每页的项目数量`pageSize`和总行数`total`，并可以选择提供其他的回调函数来处理不同的事件。