const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(`bolt://${process.env.DB_HOST || 'localhost'}`, neo4j.auth.basic('neo4j', process.env.DB_PASS));
const session = driver.session();

process.on('exit', () => {
    driver.close();
});


export default session;
