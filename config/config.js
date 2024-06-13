require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

console.log('DB_USER:', process.env.DB_USER); 
console.log('DB_PASSWORD:', process.env.DB_PASSWORD); 
console.log('DB_NAME:', process.env.DB_NAME); 
console.log('DB_HOST:', process.env.DB_HOST); 
console.log('DB_DIALECT:', process.env.DB_DIALECT); 

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
};

