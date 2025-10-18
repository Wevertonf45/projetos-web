import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'mysql',
    user: 'wvt',
    password: 'wvt123',
    database: 'dashboard'
})

export default connection