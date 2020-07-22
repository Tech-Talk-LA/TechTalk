-- INVOKE psql -d <PG_URI> -f techTalk_postgres_create.sql

DROP TABLE Users
CASCADE;
DROP TABLE Techs
CASCADE;
DROP TABLE Learn
CASCADE;
DROP TABLE Teach
CASCADE;
DROP TABLE Conversations
CASCADE;
DROP TABLE Messages
CASCADE;
DROP TABLE Devices CASCADE;

-- Create Tables
CREATE TABLE Users
(
  user_id serial PRIMARY KEY,
  user_name VARCHAR (100) NOT NULL,
  description VARCHAR,
  email VARCHAR UNIQUE NOT NULL
);

CREATE TABLE Techs
(
  tech_id serial PRIMARY KEY,
  tech VARCHAR UNIQUE NOT NULL
);

CREATE TABLE Learn
(
  learn_id serial PRIMARY KEY,
  tech_id int NOT NULL,
  user_id int UNIQUE NOT NULL,
  FOREIGN KEY (tech_id) REFERENCES techs(tech_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE Teach
(
  teach_id serial PRIMARY KEY,
  tech_id int NOT NULL,
  user_id int NOT NULL,
  FOREIGN KEY (tech_id) REFERENCES techs(tech_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE Conversations
(
  conversation_id serial PRIMARY KEY,
  sender_id int NOT NULL,
  receiver_id int NOT NULL,
  FOREIGN KEY (sender_id) REFERENCES users(user_id),
  FOREIGN KEY (receiver_id) REFERENCES users(user_id)
);

CREATE TABLE Messages
(
  message_id serial PRIMARY KEY,
  created_at timestamp default current_timestamp NOT NULL,
  sender_id int NOT NULL,
  receiver_id int NOT NULL,
  conversation_id int NOT NULL,
  body_text VARCHAR NOT NULL,
  FOREIGN KEY (sender_id) REFERENCES users(user_id),
  FOREIGN KEY (receiver_id) REFERENCES users(user_id),
  FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id)
);

CREATE TABLE Devices 
(
  device_id VARCHAR PRIMARY KEY,
  auth_token VARCHAR NOT NULL,
  last_updated TIMESTAMP default current_timestamp NOT NULL
);

------------------------
-- Create Mock Data 
------------------------

-- TECHS

INSERT INTO techs
  (tech)
VALUES
  ('javascript');
INSERT INTO techs
  (tech)
VALUES
  ('ruby');
INSERT INTO techs
  (tech)
VALUES
  ('c++');
INSERT INTO techs
  (tech)
VALUES
  ('python');
INSERT INTO techs
  (tech)
VALUES
  ('java');

-- USERS

INSERT INTO Users
  (user_name, description, email)
VALUES
  ('Hideaki', 'I will teach js and want to learn python', 'hideaki@example.com');
INSERT INTO Users
  (user_name, description, email)
VALUES
  ('Edwin', 'I know python and want to learn js', 'edwin@example.com');
INSERT INTO Users
  (user_name, description, email)
VALUES
  ('Nick', 'I like ruby and want to learn python', 'nick@example.com');
INSERT INTO Users
  (user_name, description, email)
VALUES
  ('Grace', 'I will teach python and I want to learn ruby', 'grace@example.com');
INSERT INTO Users
  (user_name, description, email)
VALUES
  ('Nate', 'I know java, python, and js and want to learn more js', 'nate@example.com');

-- TEACH

Insert into teach
  (tech_id, user_id)
VALUES
  (1, 1);
Insert into teach
  (tech_id, user_id)
VALUES
  (4, 2);
Insert into teach
  (tech_id, user_id)
VALUES
  (2, 3);
Insert into teach
  (tech_id, user_id)
VALUES
  (4, 4);
Insert into teach
  (tech_id, user_id)
VALUES
  (1, 5);
Insert into teach
  (tech_id, user_id)
VALUES
  (4, 5);
Insert into teach
  (tech_id, user_id)
VALUES
  (5, 5);

-- LEARN

INSERT INTO LEARN
  (tech_id, user_id)
VALUES
  (4, 1);
INSERT INTO LEARN
  (tech_id, user_id)
VALUES
  (1, 2);
INSERT INTO LEARN
  (tech_id, user_id)
VALUES
  (4, 3);
INSERT INTO LEARN
  (tech_id, user_id)
VALUES
  (2, 4);
INSERT INTO LEARN
  (tech_id, user_id)
VALUES
  (1, 5);


-- CONVERSATIONS
INSERT INTO Conversations
  (sender_id, receiver_id)
VALUES
  (1, 2);
INSERT INTO Conversations
  (sender_id, receiver_id)
VALUES
  (3, 4);
INSERT INTO Conversations
  (sender_id, receiver_id)
VALUES
  (5, 1);

-- MESSAGES BETWEEN USERS (3 pairs)
-- PAIR 1
INSERT INTO Messages
  (sender_id, receiver_id, conversation_id, body_text)
VALUES
  (1, 2, 1, 'Hey Edwin. Wanna exchange some lessons?');
INSERT INTO Messages
  (sender_id, receiver_id, conversation_id, body_text)
VALUES
  (2, 1, 1, 'Sure Hideaki');

-- PAIR 2
INSERT INTO Messages
  (sender_id, receiver_id, conversation_id, body_text)
VALUES
  (3, 4, 2, 'Hey Grace, would you be willing to teach me Python in exchange for Ruby?');
INSERT INTO Messages
  (sender_id, receiver_id, conversation_id, body_text)
VALUES
  (4, 3, 2, 'Hell no. Learn yourself');

-- PAIR 3
INSERT INTO Messages
  (sender_id, receiver_id, conversation_id, body_text)
VALUES
  (5, 1, 3, 'I am looking for a javascript tutor. I can teach you java/python in exchange if you are willing.');
INSERT INTO Messages
  (sender_id, receiver_id, conversation_id, body_text)
VALUES
  (1, 5, 3, 'yeah!');



-- practice joins

-- When a user logs in, this should run automatically (maybe?) to generate matches

-- How to join user A with MULTIPLE users based on their Learn and Teach techs

-- get User A's Teach Techs AND Learn Techs
-- then search all users who have Teach Techs === User A's Learn Tech, AND Learn Techs === A's Teach Tech

  -- 1. Get user's techs (ONE tech)
       --  const user_learn_id = SELECT tech_id FROM Learn WHERE user_id = ($1);
       --  const user_teach_idS = SELECT tech_id FROM Teach WHERE user_id = ($1); 
  -- 2. Search through teach to see who can teach it
    -- 

-- 