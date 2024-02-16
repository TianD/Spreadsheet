以下是`useTooltip`的详细文档：

**Options:**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `getTooltip` | `(cell: CellInterface \| null) => React.ElementType \| null` | 用于获取Tooltip组件的函数 | 否 |
| `gridRef` | `React.MutableRefObject<GridRef \| null>` | 网格引用 | 是 |

**Results:**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `tooltipComponent` | `React.ReactElement \| null` | 要注入页面的Tooltip组件 | 是 |
| `onMouseMove` | `(e: React.MouseEvent<HTMLElement>) => void` | 用于对齐Tooltip的鼠标移动监听器 | 是 |
| `onMouseLeave` | `(e: React.MouseEvent<HTMLElement>) => void` | 用于隐藏Tooltip的鼠标离开监听器 | 是 |