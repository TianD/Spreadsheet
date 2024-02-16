这是一个 TypeScript 声明文件，定义了一个名为 `Grid` 的 React 组件及其相关的类型和接口。`Grid` 组件是一个使用 React 和 Konva 构建的网格组件，它提供了一种灵活的方式来创建和管理一个二维网格。

以下是一些主要的类型和接口：

- `GridProps`：这是 `Grid` 组件的属性类型，包含了如宽度、高度、列数、行数、滚动条大小等属性。
```jsx
width?: number; //网格的宽度
height?: number; //网格的高度
columnCount: number; //网格中的列数
rowCount: number; //网格中的行数
rowHeight?: ItemSizer; //返回给定索引处的行高的函数
columnWidth?: ItemSizer; //返回给定索引处的列宽的函数
scrollbarSize?: number; //滚动条的大小，默认为13
estimatedColumnWidth?: number; //用于懒加载网格宽度计算
estimatedRowHeight?: number; //用于懒加载网格高度计算
onScroll?: ({ scrollLeft, scrollTop }: ScrollCoords) => void; //用户滚动网格时的回调函数
onImmediateScroll?: ({ scrollLeft, scrollTop }: ScrollCoords) => void; //立即滚动时的回调函数
showScrollbar?: boolean; //是否显示网格的滚动条
activeCell?: CellInterface | null; //当前活动的单元格
selectionBackgroundColor?: string; //选区的背景颜色
selectionBorderColor?: string; //选区的边框颜色
selectionStrokeWidth?: number; //选区的描边宽度
activeCellStrokeWidth?: number; //活动单元格的描边宽度
selections?: SelectionArea[]; //选中的单元格区域数组
fillSelection?: SelectionArea | null; //填充选区
mergedCells?: AreaProps[]; //合并的单元格数组
frozenRows?: number; //冻结的行数
frozenColumns?: number; //冻结的列数
snap?: boolean; //滚动时是否对齐行和列
showFrozenShadow?: boolean; //是否在冻结的行和列上显示阴影
shadowSettings?: ShapeConfig; //阴影设置
scrollThrottleTimeout?: number; //滚动节流等待超时
borderStyles?: StylingProps; //单元格边框样式
cellAreas?: CellRangeArea[]; //单元格区域
itemRenderer?: (props: RendererProps) => React.ReactNode; //单元格渲染器，必须是一个Konva组件，例如Group，Rect等
overlayRenderer?: (props: RendererProps) => React.ReactNode; //渲染自定义覆盖层，如单元格顶部的描边
selectionRenderer?: (props: SelectionProps) => React.ReactNode; //允许用户自定义选中单元格的设计
fillHandleProps?: Record<string, (e: any) => void>; //绑定填充句柄
onViewChange?: (view: ViewPortProps) => void; //当滚动视口改变时触发
onBeforeRenderRow?: (rowIndex: number) => void; //在渲染行之前调用，对于冻结的单元格和合并的单元格会被调用
children?: (props: ScrollCoords) => React.ReactNode; //自定义网格覆盖层
wrapper?: (children: React.ReactNode) => React.ReactNode; //允许用户在顶级上下文中包装舞台子元素
stageProps?: Omit<StageConfig, "container">; //可以注入到Konva舞台的props
showFillHandle?: boolean; //是否显示填充句柄
overscanCount?: number; //预扫描行和列的数量
fillhandleBorderColor?: string; //填充句柄的边框颜色
showGridLines?: boolean; //是否显示网格线，对于电子表格很有用
gridLineColor?: string; //自定义网格线颜色
gridLineWidth?: number; //网格线的宽度
gridLineRenderer?: (props: ShapeConfig) => React.ReactNode; //网格线组件
shadowStroke?: string; //阴影描边颜色
enableCellOverlay?: boolean; //是否为每个单元格绘制覆盖层，可以用于应用描边或在单元格顶部绘制
isHiddenRow?: (rowIndex: number) => boolean; //检查是否为隐藏的行
isHiddenColumn?: (columnIndex: number) => boolean; //检查是否为隐藏的列
isHiddenCell?: (rowIndex: number, columnIndex: number) => boolean; //检查是否为隐藏的单元格
scale?: number; //缩放比例
enableSelectionDrag?: boolean; //是否允许拖动活动单元格和选区
isDraggingSelection?: boolean; //用户是否正在拖动选区
```

- `CellInterface`：定义了单元格的接口，包含行索引和列索引。

- `RendererProps`：定义了渲染器的属性，包括单元格信息、位置信息和形状配置。

- `GridRef`：定义了 `Grid` 组件的引用类型，包含了一些方法，如滚动到指定位置、获取滚动位置、获取单元格边界等。

- `AreaProps`：定义了区域的接口，包含了上、下、左、右四个方向的值。

- `Style`：定义了样式的接口，包含了描边颜色、描边宽度等属性。

最后，`Grid` 组件被声明并导出，可以在其他文件中导入并使用。


以下是您请求的部分属性和方法的文档：

| 名称 | 类型 | 参数 | 作用 | 注释 | 是否必选 |
| --- | --- | --- | --- | --- | --- |
| width | number | - | 设置网格的宽度 | - | 否 |
| height | number | - | 设置网格的高度 | - | 否 |
| columnCount | number | - | 设置网格的列数 | - | 是 |
| rowCount | number | - | 设置网格的行数 | - | 是 |
| rowHeight | ItemSizer | index: number | 返回给定索引处的行高 | - | 否 |
| columnWidth | ItemSizer | index: number | 返回给定索引处的列宽 | - | 否 |
| scrollbarSize | number | - | 设置滚动条的大小，默认为13 | - | 否 |
| onScroll | function | { scrollLeft, scrollTop }: ScrollCoords | 用户滚动网格时调用的函数 | - | 否 |
| activeCell | CellInterface | - | 当前活动的单元格 | - | 否 |
| selections | SelectionArea[] | - | 选定的单元格区域数组 | - | 否 |
| itemRenderer | function | props: RendererProps | 单元格渲染器，必须是Konva组件，例如：Group, Rect等 | - | 否 |
| onViewChange | function | view: ViewPortProps | 当滚动视口改变时触发的函数 | - | 否 |
| onBeforeRenderRow | function | rowIndex: number | 在渲染行之前调用的函数 | - | 否 |
| stageProps | Omit<StageConfig, "container"> | - | 可以注入到Konva舞台的属性 | - | 否 |
| showFillHandle | boolean | - | 是否显示填充句柄 | - | 否 |
| overscanCount | number | - | 超扫描行和列的数量 | - | 否 |
| gridLineRenderer | function | props: ShapeConfig | 网格线渲染器 | - | 否 |
| isHiddenRow | function | rowIndex: number | 检查是否为隐藏行的函数 | - | 否 |
| isHiddenColumn | function | columnIndex: number | 检查是否为隐藏列的函数 | - | 否 |
| scale | number | - | 缩放比例 | - | 否 |
| enableSelectionDrag | boolean | - | 是否启用拖动选定的单元格 | - | 否 |
| isDraggingSelection | boolean | - | 用户是否正在拖动选定的单元格 | - | 否 |

注意：这只是`GridProps`接口的一部分属性和方法的文档，还有更多属性和方法没有列出。