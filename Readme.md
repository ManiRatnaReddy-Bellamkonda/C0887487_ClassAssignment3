# Creating Docker image from Node + Express application 
### Create Node Express application https://github.com/ManiRatnaReddy-Bellamkonda/C0887487_ClassAssignment3

### Create Dockerfile in the project and copy the following code in the file
```
# syntax=docker/dockerfile:1
FROM node:18-alpine
LABEL maintainer "maniratnabellamkonda@gmail.com"
LABEL build_date "2024-02-17"
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]
```

### Create Docker image using following commands

```
git status
docker build --tag c0887487-node-assignment3 .
docker images 
```
### Run the newly created image using below commands

```
docker run --detach --publish 3000:3000 c0887487-node-assignment3:latest
docker run --detach --publish 3001:3000 c0887487-node-assignment3:latest
docker ps

```
### Stop the container using following commands

```
docker stop awesome_raman
docker stop  angry_jang 
docker ps -a

```

### Remove existing containers using following commands
```
docker rm a7c627605b17
docker rm be0bd2e23312
docker ps -a

```

### Run the container using environment variables
```
docker run --detach --publish 3000:80 -e PORT=80 c0887487-node-assignment3:latest
docker run --detach --publish 3001:8080 -e PORT=8080 -e  NAME=c1 c0887487-node-assignment3:latest
```
### Run the container using following commands using text file

```
docker run --detach --publish 3002:3000 --env-file my-env.txt c0887487-node-assignment3:latest

```

### Tag your recently created image to publish on Docker hub registry
```

docker image tag c0887487-node-assignment3:latest mani256122/c0887487-node-assignment3:1.0.0 
docker images
```

### Pull and run the recently pushed image to local Docker environment
```
docker push mani256122/c0887487-node-assignment3:1.0.0
docker pull mani256122/c0887487-node-assignment3:1.0.0
docker run -d -p 3000:3000 mani256122/c0887487-node-assignment3:1.0.0
```