`utils.d.ts` 是一个 TypeScript 声明文件，它定义了两个函数：`createCanvasBox` 和 `createHTMLBox`。

`createCanvasBox` 是一个函数，它接收一个 `ShapeConfig` 类型的参数，这是来自 `konva/lib/Shape` 的一个类型，用于配置 Konva 形状的属性。这个函数返回一个 JSX 元素，可能是一个用于渲染自定义盒子的 Canvas 组件。

`createHTMLBox` 是一个函数，它接收一个 `SelectionProps` 类型的参数，这是来自 `./Grid` 的一个类型，用于配置选区的属性。这个函数返回一个 JSX 元素，可能是一个用于渲染自定义盒子的 HTML 组件。

这两个函数都被声明为 `export`，这意味着它们可以在其他文件中导入并使用。