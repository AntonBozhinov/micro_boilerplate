export const parseCreateParams = (params) => {
    let result = [];
    result.push('{');
    for (let prop in params) {
        if (
            params.hasOwnProperty(prop) &&
            params[prop] &&
            typeof params[prop] !== 'object' &&
            typeof params[prop] !== 'function'
        ) {
            result.push(`${prop}:`);
            if (typeof params[prop] === 'string') {
                result.push(`"${params[prop]}"`);
            } else {
                result.push(params[prop]);
            }
        }
    }
    result.push('}');
    return result.join('');
};

export const parseUpdateParams = (node) => (params) => {
    let result = [];
    for (let prop in params) {
        if (
            params.hasOwnProperty(prop) &&
            params[prop] &&
            typeof params[prop] !== 'object' &&
            typeof params[prop] !== 'function'
        ) {
            result.push(`SET ${node}.${prop} = ${params[prop]}`)
        }
    }
    return result;
};
