const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);

server.unsubscribe(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running on ${port} port`);
});
