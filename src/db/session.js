const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '123'));
const session = driver.session();

process.on('exit', () => {
    driver.close();
});


export default session;
