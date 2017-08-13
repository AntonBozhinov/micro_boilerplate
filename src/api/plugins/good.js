const goodOptions = {
    ops: {
        interval: 1000
    },
    reporters: {
        myConsoleReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*' }]
        }, {
            module: 'good-console'
        }, 'stdout'],
        myFileReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ ops: '*' }]
        }, {
            module: 'good-squeeze',
            name: 'SafeJson'
        }],
        myHTTPReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ error: '*' }]
        }]
    }
};

export default {
    register: require('good'),
    goodOptions,
};
