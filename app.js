// app.js
const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
const routeHekkoHapi = require('./routes/hello-hapi');

const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routeHekkoHapi
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();