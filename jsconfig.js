// 自动识别引入 并解决路径快捷跳转的问题
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES6",
        "jsx": "react",
        "baseUrl": "./",
        "paths": {
            "@/*": ["src/*"],
        }
    },
    "exclude": ["node_modules", "dist"],
    "include": ["src/**/*"]
}
