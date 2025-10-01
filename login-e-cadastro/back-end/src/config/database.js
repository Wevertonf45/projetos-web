export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'users',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
}
