FROM node
COPY . .
RUN yarn install
RUN yarn global add serve
RUN yarn build
EXPOSE 5000

CMD ["serve", "-s", "-l", "5000", "build"]
