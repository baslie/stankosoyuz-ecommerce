require('dotenv').config({ path: '../.env' })

module.exports = {
  projectConfig: {
    redis_url: process.env.REDIS_URL || 'redis://localhost:6379',
    database_url: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/stankosoyuz',
    database_type: 'postgres',
    jwt_secret: process.env.JWT_SECRET || 'secret',
    cookie_secret: process.env.COOKIE_SECRET || 'secret'
  },
  plugins: [],
}
