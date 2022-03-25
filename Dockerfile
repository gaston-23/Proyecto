FROM node

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

COPY /home/juanma/tinderImages/ /images/

CMD ["npm", "run", "users"]