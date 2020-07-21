const { Pool } = require('pg');
require('dotenv').config();

const URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: URI,
});

// make database

module.exports = {
  query: (string, params, cb) => {
    console.log('Executing query: ', string);
    return pool.query(string, params, cb);
  },
};
