FROM node:12.15.0

WORKDIR /server
COPY . .
RUN npm install 

EXPOSE 8080

CMD [ "node", "app.js" ]

# FROM node:12.15.0

# WORKDIR /server
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .

# EXPOSE 8080

# RUN npm install -g nodemon
# CMD npm start