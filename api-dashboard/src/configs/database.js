import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'caboose.proxy.rlwy.net',
    port: 10394,
    user: 'root',
    password: 'nnjfDEpLCaDNsKOXZmcZPrAEkzewixlY',
    database: 'railway',
});

export default connection;