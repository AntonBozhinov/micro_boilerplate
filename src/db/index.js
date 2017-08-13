import {parseParams} from './utils';

class Requester {
    constructor(db) {
        this.db = db;
    }
    // create a single node and return the node id;
    createNode(label, params = {}) {
        const query = `CREATE (a:${label} ${parseParams(params)}) RETURN ID(a)`;
        return this.db.run(query)
            .then(res => {
                // return the node identifier
                return res.records[0]._fields[0].low;
            });
    }
}

export default Requester;