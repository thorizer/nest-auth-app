console.log(process.env.DB_NAME)

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: process.env.DB_PORT,
  username: process.env.DB_LOGIN,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [
    './dist/**/*.entity.js'
  ]
}