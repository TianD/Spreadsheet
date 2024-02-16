以下是`useCopyPaste` hook的详细文档：

**Options (CopyProps)**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `selections` | `SelectionArea[]` | 选中的区域数组 | 是 |
| `activeCell` | `CellInterface \| null` | 当前活动的单元格 | 否 |
| `getValue` | `(cell: CellInterface) => any` | 一个函数，返回单元格的值 | 是 |
| `getText` | `(config: any) => string \| undefined` | 一个函数，返回文本值 | 是 |
| `gridRef` | `React.MutableRefObject<GridRef \| null>` | 用于访问网格方法的引用 | 是 |
| `onPaste` | `(rows: (string \| null)[][], activeCell: CellInterface \| null, selectionArea: SelectionArea[], selection?: SelectionArea) => void` | 当粘贴操作执行时的回调函数 | 否 |
| `onCut` | `(selection: SelectionArea) => void` | 当用户尝试剪切选中区域时的回调函数 | 否 |
| `onCopy` | `(selection: SelectionArea[]) => void` | 当复制事件发生时的回调函数 | 否 |

**Results (CopyResults)**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| `copy` | `() => void` | 一个函数，执行复制操作 |
| `paste` | `() => void` | 一个函数，执行粘贴操作 |
| `cut` | `() => void` | 一个函数，执行剪切操作 |

**使用方法**

```typescript
useCopyPaste({
  onPaste: (text) => {
    // 处理粘贴的文本
  }
})
```

在这个例子中，`useCopyPaste` hook被用于处理复制、粘贴和剪切操作。你可以通过提供一个`onPaste`函数来处理粘贴的文本。同样，你也可以提供`onCut`和`onCopy`函数来处理剪切和复制操作。