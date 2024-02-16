以下是`useTouch`的详细文档：

**Options (TouchProps):**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `gridRef` | `React.MutableRefObject<GridRef \| null>` | 用于访问网格方法的网格引用 | 是 |

**Results (TouchResults):**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `isTouchDevice` | `boolean` | 表示设备是否支持触摸的布尔值 | 是 |
| `scrollTo` | `(scrollState: ScrollCoords) => void` | 用于滚动到指定坐标的函数 | 是 |
| `scrollToTop` | `() => void` | 用于滚动到顶部的函数 | 是 |