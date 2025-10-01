export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    database: 'users',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
}
