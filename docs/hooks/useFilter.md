以下是`useFilter` hook的详细文档：

**Options (FilterProps)**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `getFilterComponent` | `(cell: CellInterface \| null) => React.ElementType \| null` | 返回过滤器组件的函数 | 否 |
| `gridRef` | `React.MutableRefObject<GridRef \| null>` | 用于访问网格方法的引用 | 是 |
| `getValue` | `(cell: CellInterface) => any` | 一个函数，返回单元格的值 | 是 |
| `width` | `number` | 过滤器面板的宽度 | 否 |
| `offset` | `number` | 偏移量 | 否 |
| `frozenRows` | `number` | 冻结的行数 | 否 |
| `frozenColumns` | `number` | 冻结的列数 | 否 |

**Results (FilterResults)**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| `filterComponent` | `React.ReactNode` | 渲染过滤器的组件 |
| `showFilter` | `(cell: CellInterface, index: number, filterView: FilterView, filter?: FilterDefinition) => void` | 显示过滤器的函数 |
| `hideFilter` | `() => void` | 隐藏过滤器组件的函数 |

**使用方法**

```typescript
useFilter({
  gridRef: gridRef,
  getValue: (cell) => {
    // 返回单元格的值
  },
  // 其他选项...
})
```

在这个例子中，`useFilter` hook被用于处理网格的过滤操作。你可以通过提供一个`getValue`函数来获取单元格的值。同样，你也可以提供其他的回调函数来处理不同的事件。