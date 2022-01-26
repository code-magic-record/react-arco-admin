<h4>第一步：</h4>
在项目根目录新建`Dockerfile`文件

```bash
FROM node:12.19.0
WORKDIR /manage
COPY package.json .
RUN npm install -g cnpm
RUN cnpm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "start"]
```


