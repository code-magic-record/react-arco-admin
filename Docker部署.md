**前置学习知识**
[笔记文档](https://github.com/yaogengzhu/Learning-notes/tree/master/note/docker)

<h4>第一步：在项目根目录新建`Dockerfile`文件</h4>


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

<h4>第二步：制作容器</h4>
```bash
docker build -f Dockerfile -t manage .
```

<h4>第三步：查看容器</h4>
```bash
docker images
```

<h5>第四步：启动容器 并挂载数据卷</h5>
```bash
docker run -d  -p 8080:8080 manage /bin/bash
```