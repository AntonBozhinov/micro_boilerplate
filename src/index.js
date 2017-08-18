import routes from './api/routes';
import plugins from './api/plugins';

const laabr = require('laabr');
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port:  process.env.PORT || 3000, host: process.env.HOST || 'localhost' });
laabr.format('onPostStart', ':time :start :level :message');
laabr.token('start', () => `[start] HOST: ${server.info.host} PORT: ${server.info.port}`);
server.route(routes);
server.register(plugins)
    .then(() => {
        if (!module.parent) {
            server.start();
        }
    })
    .catch(err => {
        throw err;
    });

export default server;