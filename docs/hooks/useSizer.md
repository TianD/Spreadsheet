以下是`useAutoSizer`的详细文档：

**Options:**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `gridRef` | `React.MutableRefObject<GridRef \| null>` | 用于访问网格函数的引用 | 是 |
| `getValue` | `(cell: CellInterface) => any` | 单元格值获取器 | 是 |
| `initialVisibleRows` | `number` | 初始可见行数 | 否 |
| `minColumnWidth` | `number` | 列宽度的最小限制 | 否 |
| `cellSpacing` | `number` | 单元格间距，用于宽度计算 | 否 |
| `timeout` | `number` | 滚动超时 | 否 |
| `resizeOnScroll` | `boolean` | 是否在滚动时计算宽度并调整网格 | 否 |
| `fontFamily` | `string` | 用于计算宽度的字体 | 否 |
| `fontSize` | `number` | 字体大小 | 否 |
| `fontWeight` | `string` | 字体粗细 | 否 |
| `fontStyle` | `string` | 字体样式 | 否 |
| `resizeStrategy` | `"lazy" \| "full"` | 用于计算列宽度的策略 | 否 |
| `rowCount` | `number` | 网格中的行数 | 否 |
| `autoResize` | `boolean` | 是否启用自动调整大小 | 否 |
| `columnSizes` | `{[key: number]: number}` | 列宽度的映射 | 否 |
| `isHiddenRow` | `HiddenType` | 隐藏的行 | 是 |
| `isHiddenColumn` | `HiddenType` | 隐藏的列 | 是 |
| `frozenRows` | `number` | 冻结的行数 | 否 |
| `scale` | `number` | 当前的缩放因子 | 否 |
| `getText` | `(config: any) => string \| undefined` | 获取文本值的函数 | 是 |

**Results:**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `columnWidth` | `ItemSizer` | 由网格消费的列宽度函数 | 否 |
| `onViewChange` | `(cells: ViewPortProps) => void` | 视口改变时的回调函数 | 是 |
| `getColumnWidth` | `(columnIndex: number, scale?: number) => number` | 基于调整策略获取列宽度的函数 | 是 |
| `getTextMetrics` | `(text: string \| number) => TextDimensions` | 获取文本尺寸的函数 | 是 |