以下是`useImage` hook的详细文档：

**Options (UseImageProps)**

| 名称 | 类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| `url` | `string` | 图片的URL | 是 |
| `crossOrigin` | `string` | 跨域设置，可选值包括 "anonymous" 和 "use-credentials" | 否 |

**Results (UseImageResults)**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| `image` | `HTMLImageElement \| undefined` | 加载的图片元素 |
| `width` | `number` | 图片的宽度 |
| `height` | `number` | 图片的高度 |
| `status` | `string` | 图片的加载状态，可能的值包括 "loading", "loaded" 和 "error" |

**使用方法**

```typescript
useImage({
  url: 'https://example.com/image.jpg',
  crossOrigin: 'anonymous',
})
```

在这个例子中，`useImage` hook被用于加载一个图片。你需要提供图片的`url`，并可以选择提供`crossOrigin`来设置跨域策略。