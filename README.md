# Todo List

## ESLint 报错处理

- 不能在非 `.jsx`  文件中使用 JSX

```js
"rules": {
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
},
```

- unexpected block statement surrounding arrow body jsx

```js
"rules": {
    "arrow-body-style": ["error", "always"]
},
```



