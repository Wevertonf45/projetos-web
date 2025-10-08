import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'MySQL',       // ou 127.0.0.1
    user: 'root',            // seu usuário MySQL
    password: '123456',            // sua senha (ou deixe vazio)
    database: 'users', // troque pelo nome do seu banco
});

export default connection;
