FROM cypress/included:13.11.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV CYPRESS_BASE_URL=https://the-internet.herokuapp.com

CMD ["npx", "cypress", "run"]
