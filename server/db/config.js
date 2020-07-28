const Sequelize = require('sequelize');

const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
};

const sequelize = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASS,
  {
    host: 'localhost',
    dialect: 'postgres',
    pool
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log('Unable to connect to the Database', err);
  });

module.exports = sequelize;
