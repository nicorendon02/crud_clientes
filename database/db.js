const pg = require('pg');

const connection = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: 'nico02020',
    port: 5432,
    database: 'ventas'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connected to database!');
});

module.exports = connection;
