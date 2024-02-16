以下是`UseSelectionOptions`的详细文档：

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `gridRef` | `React.MutableRefObject<GridRef \| null>` | 访问网格函数的引用 | 是 |
| `initialSelections` | `SelectionArea[]` | 初始选区 | 否 |
| `initialActiveCell` | `CellInterface \| null` | 初始活动单元格 | 否 |
| `columnCount` | `number` | 网格的列数 | 否 |
| `rowCount` | `number` | 网格的行数 | 否 |
| `allowDeselectSelection` | `boolean` | 是否允许取消选区 | 否 |
| `onFill` | `(activeCell: CellInterface, selection: SelectionArea \| null, selections: SelectionArea[]) => void` | 填充时的回调函数 | 否 |
| `isHiddenRow` | `HiddenType` | 隐藏的行 | 否 |
| `isHiddenColumn` | `HiddenType` | 隐藏的列 | 否 |
| `alwaysScrollToActiveCell` | `boolean` | 是否总是滚动到活动单元格 | 否 |
| `selectionTopBound` | `number` | 选区的上边界 | 否 |
| `selectionBottomBound` | `number` | 选区的下边界 | 否 |
| `selectionLeftBound` | `number` | 选区的左边界 | 否 |
| `selectionRightBound` | `number` | 选区的右边界 | 否 |
| `mergedCells` | `AreaProps[]` | 合并的单元格 | 否 |
| `mouseDownInterceptor` | `(e: React.MouseEvent<HTMLDivElement>, coords: CellInterface, start: React.MutableRefObject<CellInterface \| null>, end: React.MutableRefObject<CellInterface \| null>) => boolean \| undefined` | 鼠标按下时的拦截器 | 否 |
| `mouseMoveInterceptor` | `(e: globalThis.MouseEvent, coords: CellInterface, start: React.MutableRefObject<CellInterface \| null>, end: React.MutableRefObject<CellInterface \| null>) => boolean \| undefined` | 鼠标移动时的拦截器 | 否 |
| `canSelectionSpanMergedCells` | `(start: CellInterface, end: CellInterface) => boolean` | 是否可以跨合并单元格选择 | 否 |
| `selectionPolicy` | `SelectionPolicy` | 选区策略 | 否 |
| `getValue` | `(cell: CellInterface) => string \| number \| undefined` | 获取单元格值的函数 | 是 |
| `newSelectionMode` | `"clear" \| "modify" \| "append"` | 新的选区模式 | 否 |
| `onSelectionMove` | `(from: SelectionArea, to: SelectionArea) => void` | 选区移动时的回调函数 | 否 |


以下是`SelectionResults`的详细文档：

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `activeCell` | `CellInterface \| null` | 活动选中的单元格 | 是 |
| `newSelection` | `(coords: CellInterface) => void` | 用于调用新的选择，所有旧的选择将被清除 | 是 |
| `setSelections` | `(selections: SelectionArea[] \| ((selections: SelectionArea[]) => SelectionArea[])) => void` | 用于更新选择，不清除旧的选择 | 是 |
| `modifySelection` | `(coords: CellInterface) => void` | 修改选择 | 是 |
| `setActiveCell` | `(coords: CellInterface \| null, shouldScroll?: boolean) => void` | 设置当前活动的单元格 | 是 |
| `setActiveCellState` | `(coords: CellInterface \| null) => void` | 仅保存内部状态 | 是 |
| `selections` | `SelectionArea[]` | 所有选择范围的数组 | 是 |
| `onMouseDown` | `(e: React.MouseEvent<HTMLDivElement>) => void` | 鼠标按下的处理器，用于设置activeCell | 是 |
| `onKeyDown` | `(e: React.KeyboardEvent<HTMLElement>) => void` | 用于根据按下的键移动选择的处理器 | 是 |
| `fillHandleProps` | `Record<string, (e: any) => void>` | 填充句柄的鼠标按下事件 | 否 |
| `fillSelection` | `SelectionArea \| undefined` | 填充选择 | 是 |
| `clearLastSelection` | `() => void` | 清除最后的选择 | 是 |
| `selectAll` | `() => void` | 选择所有单元格 | 是 |
| `appendSelection` | `(start: CellInterface, end: CellInterface) => void` | 添加新的选择 | 是 |
| `clearSelections` | `() => void` | 清除所有当前的选择 | 是 |
| `onSelectionMouseDown` | `(e: React.MouseEvent<HTMLDivElement>, cell: CellInterface \| undefined, selection: SelectionArea \| undefined, index: number \| undefined, shouldClamp?: boolean) => void` | 选择鼠标按下的处理器 | 否 |
| `isDragging` | `boolean` | 指示是否正在拖动选择的布尔值 | 是 |
| `draggedSelection` | `SelectionArea` | 当前被拖动的选择 | 是 |
| `initialDraggedSelection` | `SelectionArea` | 用户开始拖动前选择的选择 | 是 |