以下是`useEditable` hook的详细文档：

**Options (UseEditableOptions)**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `editorProps` | `() => any` | 编辑器属性 | 否 |
| `getEditor` | `(cell: CellInterface \| null) => React.ElementType` | 获取编辑器的函数 | 否 |
| `gridRef` | `React.MutableRefObject<GridRef \| null>` | 用于访问网格方法的引用 | 是 |
| `getValue` | `(cell: CellInterface) => any` | 一个函数，返回单元格的值 | 是 |
| `onCancel` | `(e?: React.KeyboardEvent<HTMLTextAreaElement \| HTMLInputElement \| HTMLDivElement>) => void` | 用户取消编辑时的回调函数 | 否 |
| `onChange` | `(value: string, activeCell: CellInterface) => void` | 用户在编辑器中更改值时的回调函数 | 否 |
| `onSubmit` | `(value: string, activeCell: CellInterface, nextActiveCell?: CellInterface \| null) => void` | 用户提交值时的回调函数 | 否 |
| `onDelete` | `(activeCell: CellInterface, selections: SelectionArea[]) => void` | 用户选择区域并按删除键时的回调函数 | 否 |
| `selections` | `SelectionArea[]` | 选中的区域数组 | 是 |
| `activeCell` | `CellInterface \| null` | 当前活动的单元格 | 是 |
| `canEdit` | `(coords: CellInterface) => boolean` | 判断是否可以编辑的函数 | 否 |
| `frozenColumns` | `number` | 冻结的列数 | 否 |
| `frozenRows` | `number` | 冻结的行数 | 否 |
| `hideOnBlur` | `boolean` | 失焦时是否隐藏编辑器 | 否 |
| `isHiddenRow` | `HiddenType` | 隐藏的行 | 是 |
| `isHiddenColumn` | `HiddenType` | 隐藏的列 | 是 |
| `columnCount` | `number` | 网格的列数 | 是 |
| `rowCount` | `number` | 网格的行数 | 是 |
| `selectionTopBound` | `number` | 选区的上边界 | 否 |
| `selectionBottomBound` | `number` | 选区的下边界 | 否 |
| `selectionLeftBound` | `number` | 选区的左边界 | 否 |
| `selectionRightBound` | `number` | 选区的右边界 | 否 |
| `onKeyDown` | `(e: React.KeyboardEvent<HTMLInputElement \| HTMLTextAreaElement \| HTMLDivElement>) => void` | 键盘按下事件的回调函数 | 否 |
| `onBeforeEdit` | `(coords: CellInterface) => void` | 编辑前的同步回调函数 | 否 |
| `sticky` | `boolean` | 如果为真，一旦编辑器激活，它将始终可见，编辑器将不会随网格滚动 | 否 |

**Results (EditableResults)**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| `editorComponent` | `React.ReactNode` | 可注入的编辑器组件 |
| `onDoubleClick` | `(e: React.MouseEvent<HTMLDivElement>) => void` | 双击事件的监听器，激活网格 |
| `onScroll` | `(props: ScrollCoords) => void` | 滚动事件的监听器，用于对齐编辑器 |
| `onKeyDown` | `(e: React.KeyboardEvent<HTMLDivElement>) => void` | 键盘按下事件的监听器 |
| `nextFocusableCell` | `(currentCell: CellInterface, direction: Direction) => CellInterface \| null` | 获取下一个可聚焦的单元格 |
| `isEditInProgress` | `boolean` | 是否正在编辑 |
| `editingCell` | `CellInterface \| null` | 当前正在编辑的单元格 |
| `makeEditable` | `(cell: CellInterface, value?: string) => void` | 使单元格可编辑的函数 |
| `setValue` | `(value: string, activeCell: CellInterface, previousValue?: string) => void` | 设置值的函数 |
| `hideEditor` | `() => void` | 隐藏编辑器的函数 |
| `showEditor` | `() => void` | 显示编辑器的函数 |
| `onMouseDown` | `(e: React.MouseEvent<HTMLDivElement>) => void` | 鼠标按下事件的监听器 |
| `submitEditor` | `(value: string, activeCell: CellInterface, nextActiveCell?: CellInterface \| null) => void` | 提交编辑器的函数 |
| `cancelEditor` | `() => void` | 取消编辑的函数 |

**使用方法**

```typescript
useEditable({
  gridRef: gridRef,
  getValue: (cell) => {
    // 返回单元格的值
  },
  // 其他选项...
})
```

在这个例子中，`useEditable` hook被用于使网格可编辑。你可以通过提供一个`getValue`函数来获取单元格的值。同样，你也可以提供其他的回调函数来处理不同的事件。