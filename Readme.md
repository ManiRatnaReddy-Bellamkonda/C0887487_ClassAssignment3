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
