const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/rebify';

mongoose
  .connect(DB_URI, { useNewUrlParser: true, dbName: 'rebify' }, () => {})
  .then(() => console.info(`Correctly connected to the database: ${DB_URI}`))
  .catch(error =>
    console.error(`There was an error when trying to connect to the database: ${DB_URI}`, error)
  );
