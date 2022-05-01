FROM node:14.17-alpine as dev

WORKDIR /app/

COPY ./backend/package-lock.json ./backend/package.json ./ ./backend/.env ./

RUN npm install 

COPY ./backend .

FROM node:14.17-alpine as builder

WORKDIR /app/

COPY --from=dev /app/ /app/

RUN npm run build 


FROM node:14.17-alpine

WORKDIR /app/
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./ 
COPY --from=builder ./app/.env ./

RUN NODE_ENV=production
RUN npm install

COPY --from=builder /app/dist ./dist
COPY --from=builder ./app/.env ./dist
EXPOSE 80
CMD ["npm","run", "start:prod"]
