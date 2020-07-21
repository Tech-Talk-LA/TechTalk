const { Pool } = require('pg');
require('dotenv').config();

const URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: URI,
});

// DB

// Users table
//   user_id
//   user_name
//   description
//   email
//   connections
//   token (for auth?)

// CREATE TABLE Users (
//   user_id serial PRIMARY KEY,
//   user_name VARCHAR (100) NOT NULL,
//   description VARCHAR,
//   email VARCHAR UNIQUE NOT NULL,
//   connection_tokens INT NOT NULL,
//   connections integer ARRAY
//   );

//  Tech table
// tech_id
// tech

// CREATE TABLE Techs (
//   tech_id serial PRIMARY KEY,
//   tech VARCHAR UNIQUE NOT NULL
// )

// Learn table
// learn_id
// tech_id
// user_id

// CREATE TABLE Learn (
//   learn_id serial PRIMARY KEY,
//   tech_id int NOT NULL,
//   user_id int NOT NULL,
//   FOREIGN KEY (tech_id) REFERENCES techs(tech_id),
//   FOREIGN KEY (user_id) REFERENCES users(user_id)
// )

// Teach table
// tech_id
// user_id

// CREATE TABLE Teach (
//   teach_id serial PRIMARY KEY,
//   tech_id int NOT NULL,
//   user_id int NOT NULL,
//   FOREIGN KEY (tech_id) REFERENCES techs(tech_id),
//   FOREIGN KEY (user_id) REFERENCES users(user_id)
// )

// Messages table
// message_id
// created_at
// sender_id
// receiver_id
// conversation_id

// CREATE Messages table (
// message_id serial PRIMARY KEY,
// )

// Conversations table
// conversation_id
// sender_id
// receiver_id

module.exports = {
  query: (string, params, cb) => {
    console.log('Executing query: ', string);
    return pool.query(string, params, cb);
  },
};
