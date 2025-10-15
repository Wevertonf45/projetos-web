import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: '123456',
    database: 'users'
})

export default connection