### css Module 处理

> 问题：

    解决css冲突

原有解决方案：
BEM --- JS

```less
@class-prefix-header: ~'header';

.@{class-prefix-header} {
  display: flex;
  justify-content: space-between;
  width: 100%;
  &-ul {
    display: flex;
    list-style: none;

    & > li {
      padding-right: 20px;
    }
  }

  &-logo {
    display: flex;
    align-items: center;
    width: auto;
    cursor: pointer;
    color: var(--color-text-1);
  }

  &-fullscreen {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &-avatar {
    cursor: pointer;
  }
}
```

新的解决方案。webpack 配置css Module。同时兼容之前的处理方案, 配置如下

```js
{
    test: /\.less$/i,
    use: [
        {
        loader: 'style-loader',
        },
        {
        loader: 'css-loader',
        options: {
            modules: {
            auto: (resourcePath) => resourcePath.endsWith('.module.less'), // 兼容之前的处理。只针对 .module.less 处理
            localIdentName: '[local]___[hash:base64:5]'
            }
        }
        },
        {
        loader: 'less-loader',
        options: {
            lessOptions: {
            modifyVars: {
                'arcoblue-6': '#3491FA',
            },
            javascriptEnabled: true
            },
        },
        },
    ],
},
```