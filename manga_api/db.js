const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'flatw',
    host: 'localhost',
    port: 5432,
    database: 'manga_shop_api'
});

module.exports = pool;