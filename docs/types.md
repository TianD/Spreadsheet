`types.d.ts` 是一个 TypeScript 声明文件，它定义了一些枚举类型和类型别名，这些类型用于描述键盘按键、方向、MIME 类型、鼠标按钮和选择策略。

- `KeyCodes` 是一个枚举类型，定义了各种键盘按键的键码。例如，`Right` 的键码是 39，`Left` 的键码是 37，`Up` 的键码是 38，`Down` 的键码是 40，等等。

- `Direction` 是一个枚举类型，定义了四个方向：`Up`、`Down`、`Left` 和 `Right`。

- `MimeType` 是一个枚举类型，定义了四种 MIME 类型：`html`、`csv`、`plain` 和 `json`。

- `MouseButtonCodes` 是一个枚举类型，定义了三种鼠标按钮：`left`、`middle` 和 `right`，它们的值分别是 1、2 和 3。

- `SelectionPolicy` 是一个类型别名，表示选择策略，它可以是 `"single"`、`"range"` 或 `"multiple"`。

这个文件中的所有元素都被声明为 `export`，这意味着它们可以在其他文件中导入并使用。