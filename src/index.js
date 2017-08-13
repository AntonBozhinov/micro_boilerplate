import routes from './api/routes';
import plugins from './api/plugins';

const laabr = require('laabr');
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });
laabr.format('onPostStart', ':time :start :level :message');
laabr.token('start', () => '[start] port 3000');
server.route(routes);
server.register(plugins)
    .then(() => server.start())
    .catch(err => {
        throw err;
    });
