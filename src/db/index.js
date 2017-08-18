import {parseCreateParams, parseUpdateParams} from './utils';

class Requester {
    constructor(db) {
        this.db = db;
    }
    // create a single node and return the node id;
    createNode(label, params = {}) {
        const query = `CREATE (a:${label} ${parseCreateParams(params)}) RETURN ID(a)`;
        return this.db.run(query)
            .then(res => {
                // return the node identifier
                return res.records[0]._fields[0].low;
            });
    }

    updateNodeById(id, label, params = {}) {
        const query = `
        MATCH (a:${label}) where ID(a) = ${id}
        ${parseUpdateParams('a')(params)}
        return properties(a)
        `;
        return this.db.run(query)
            .then(res => {
                return res.records[0]._fields[0];
            })
            .catch(err => {
                throw err;
            });
    }
}

export default Requester;