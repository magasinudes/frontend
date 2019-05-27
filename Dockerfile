FROM node
COPY . .
RUN yarn install
RUN yarn global add serve
RUN yarn build
EXPOSE 80

CMD ["serve", "-s", "-l", "80", "build"]
