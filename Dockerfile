FROM node:16-alpine as development

WORKDIR /app

COPY package.json ./
COPY npm-shrinkwrap.json ./
COPY .npmrc ./

RUN npm ci

COPY docs ./docs
COPY src ./src
COPY static ./static
COPY docusaurus.config.js ./
COPY sidebars.js ./

CMD [ "npm", "start"]

FROM development as builder

RUN npm run build

FROM nginx:1.21-alpine as production

COPY --from=builder /app/build /usr/share/nginx/html
