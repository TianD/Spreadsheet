import { useRef, useState, useCallback } from 'react';
import { Grid, Cell, useSelection, useEditable, useCopyPaste } from '@rowsncolumns/grid';

// 原始数据
const orig_data = {}
for (let i = 1; i <= 200; i++) {
    for (let j = 1; j <= 200; j++) {
        orig_data[`${i}-${j}`] = `${i}-${j}`
    }
}

// 生成列头标签（A, B, C, ...）
const getColumnLabel = (columnIndex) => {
    let label = '', A = 'A'.charCodeAt(0), Z = 'Z'.charCodeAt(0);
    while (columnIndex > 0) {
        let remainder = (columnIndex - 1) % 26;
        label = String.fromCharCode(A + remainder) + label;
        columnIndex = Math.floor((columnIndex - 1) / 26);
    }
    return label;
};

const Spreadsheet = () => {
    const gridRef = useRef(null);
    const [data, setData] = useState(orig_data);    //数据
    const [mergedCells, setMergedCells] = useState([]); //合并单元格的数组
    const [frozenRows, setFrozenRows] = useState(1);    //冻结行的数量
    const [frozenColumns, setFrozenColumns] = useState(1);  //冻结列的数量
    const [rowCount, setRowCount] = useState(1000); //总行数
    const [columnCount, setColumnCount] = useState(1000);  //总列数

    const getCellValue = useCallback(
        (cell) => data[`${cell.rowIndex}-${cell.columnIndex}`],
        [data]
    );

    const {
        activeCell,
        selections,
        newSelection,
        setSelections,
        setActiveCell,
        onKeyDown: onSelectKeyDown,
        onMouseDown: onSelectMouseDown,
        ...selectionProps
    } = useSelection({
        gridRef,
        // initialActiveCell: { rowIndex: 0, columnIndex: 0 },
        columnCount: columnCount, // 确保这里的columnCount和rowCount与Grid组件中的一致
        rowCount: rowCount,
        getValue: (cell) => (cell.value),
        onFill: (activeCell, fillSelection) => {
            if (!fillSelection) return;
            const { bounds } = fillSelection;
            const changes = {};
            const value = getCellValue(activeCell);
            for (let i = bounds.top; i <= bounds.bottom; i++) {
                for (let j = bounds.left; j <= bounds.right; j++) {
                    changes[`${i}-${j}`] = value;
                }
            }
            setData((prev) => ({ ...prev, ...changes }));
        },
        mouseDownInterceptor: (e, coords, start, end) => {
            // 检查是否点击了列头（rowIndex为0）
            if (coords.rowIndex === 0 && coords.columnIndex > 0) {
                // 选中整列
                newSelection({ rowIndex: 0, columnIndex: coords.columnIndex });
                setSelections([{
                    bounds: {
                        top: 1,
                        bottom: columnCount, // 假设总行数为100
                        left: coords.columnIndex,
                        right: coords.columnIndex,
                    }
                }]);
                return false; // 阻止默认行为
            }
            // 检查是否点击了行头（columnIndex为0）
            else if (coords.columnIndex === 0 && coords.rowIndex > 0) {
                // 选中整行
                newSelection({ rowIndex: coords.rowIndex, columnIndex: 0 });
                setSelections([{
                    bounds: {
                        top: coords.rowIndex,
                        bottom: coords.rowIndex,
                        left: 1, // 从第一列开始
                        right: rowCount, // 假设总列数为100
                    }
                }]);
                return false; // 阻止默认行为
            }
            // 允许默认行为继续，对于非行头和列头的单元格
            return true;
        },
    });

    const {
        editorComponent,
        onDoubleClick,
        isEditInProgress,
        onKeyDown: onEditKeyDown,
        onMouseDown: onEditMouseDown,
        ...editableProps
    } = useEditable({
        gridRef,
        getValue: getCellValue,
        selections,
        activeCell,
        columnCount: columnCount,
        rowCount: rowCount,
        onCancel: (cell) => {
            console.log('onCancel', cell);
        },
        onChange: (value, cell) => {
            console.log('onChange', cell, value);
        },
        onSubmit: (value, cell, nextActiveCell) => {
            console.log('onSubmit', cell, value);
            setData((prev) => {
                return {
                    ...prev,
                    [`${cell.rowIndex}-${cell.columnIndex}`]: value,
                };
            });

            /* Select the next cell */
            if (nextActiveCell) {
                setActiveCell(nextActiveCell);
            }
        },
        onDelete: (cell) => {
            console.log('onDelete', cell);
            setData((prev) => {
                const next = { ...prev };
                delete next[`${cell.rowIndex}-${cell.columnIndex}`];
                return next;
            });
        },
        onKeyDown: (e) => {
            console.log('onEditKeyDown', e);
        },
        canEdit: (cell) => {
            if (cell.rowIndex === 0 || cell.columnIndex === 0) {
                return false;
            } else {
                return true;
            }
        },

    });

    const { copy, paste, cut } = useCopyPaste({
        gridRef,
        selections: selections,
        activeCell: activeCell,
        getValue: (cell) => data[`${cell.rowIndex}-${cell.columnIndex}`],
        onPaste: (rows, activeCell) => {
            const { rowIndex, columnIndex } = activeCell;
            const endRowIndex = Math.max(rowIndex, rowIndex + rows.length - 1);
            const endColumnIndex = Math.max(
                columnIndex,
                columnIndex + (rows.length && rows[0].length - 1)
            );
            const changes = {};
            for (const [i, row] of rows.entries()) {
                for (const [j, cell] of row.entries()) {
                    changes[[rowIndex + i, columnIndex + j]] = cell.text;
                }
            }
            setData((prev) => ({ ...prev, ...changes }));

            /* Should select */
            if (rowIndex === endRowIndex && columnIndex === endColumnIndex) return;

            setSelections([
                {
                    bounds: {
                        top: rowIndex,
                        left: columnIndex,
                        bottom: endRowIndex,
                        right: endColumnIndex,
                    },
                },
            ]);
        },
        onCut: (selection) => {
            const { bounds } = selection;
            const changes = {};
            for (let i = bounds.top; i <= bounds.bottom; i++) {
                for (let j = bounds.left; j <= bounds.right; j++) {
                    changes[[i, j]] = undefined;
                }
            }
            setData((prev) => ({ ...prev, ...changes }));
        },
    })

    // 合并单元格的处理函数
    const handleMergeCells = () => {
        console.log(selections)
        if (selections.length > 0) {
            const selection = selections[0].bounds; // 假设只处理第一个选区
            setMergedCells([...mergedCells, selection]);
        }
    };

    const shortcutActions = {
        'ctrl+m': handleMergeCells,
        'ctrl+c': copy,
        'ctrl+v': paste,
        'ctrl+x': cut,
        // 'ctrl+z': handleUndo,
        // 'ctrl+y': handleRedo,
        // 'alt+shift+k': handleSpecialAction, // 示例：使用Alt+Shift+K的组合
        // 添加更多快捷键组合及其对应的处理函数...
    };

    // 合并处理键盘事件，包括启动编辑和其他键盘操作
    const onKeyDown = (e) => {
        // 检查是否按下了回车键，并且有一个激活的单元格
        const keyCombination = `${e.ctrlKey ? 'ctrl+' : ''}${e.altKey ? 'alt+' : ''}${e.shiftKey ? 'shift+' : ''}${e.key.toLowerCase()}`;
        if (shortcutActions[keyCombination]) {
            e.preventDefault(); // 防止默认行为
            shortcutActions[keyCombination](); // 调用与快捷键关联的函数
        }
        else {
            // 其他键盘事件传递给原有的onKeyDown处理
            onEditKeyDown(e);
            onSelectKeyDown(e);
        }
    };

    // 合并鼠标事件
    const onMouseDown = (e) => {
        onEditMouseDown(e);
        onSelectMouseDown(e);
    }

    return (
        <div
            tabIndex={0} // 使div可聚焦，以便可以捕获键盘事件
            style={{ outline: 'none' }} // 防止显示聚焦时的边框
        >
            {/* <button onClick={handleMergeCells}>Merge Cells</button> */}
            <Grid
                ref={gridRef}
                rowCount={rowCount}
                columnCount={columnCount}
                frozenColumns={frozenColumns}
                frozenRows={frozenRows}
                width={800}
                height={800}
                rowHeight={() => 20}
                columnWidth={() => 100}
                activeCell={activeCell}
                selections={selections}
                mergedCells={mergedCells}
                onMouseDown={onMouseDown}
                onKeyDown={onKeyDown}
                enableSelectionDrag={true}
                showFillHandle={!isEditInProgress}
                showGridLines={true}
                onDoubleClick={onDoubleClick}
                {...selectionProps}
                {...editableProps}
                itemRenderer={(cellProps) => {
                    // Render column header
                    if (cellProps.rowIndex === 0 && cellProps.columnIndex > 0) {
                        return (
                            <Cell
                                {...cellProps}
                                value={getColumnLabel(cellProps.columnIndex)}
                            />
                        );
                    }
                    // Render row header
                    else if (cellProps.columnIndex === 0 && cellProps.rowIndex > 0) {
                        return (
                            <Cell
                                {...cellProps}
                                value={cellProps.rowIndex.toString()}
                            />
                        );
                    } else {
                        // Render data cells
                        const cellData = data[`${cellProps.rowIndex}-${cellProps.columnIndex}`] || '';
                        return (
                            <Cell
                                {...cellProps}
                                value={cellData}
                            />
                        );
                    }
                }}

            />
            {editorComponent}
        </div>
    );
};

export default Spreadsheet;
