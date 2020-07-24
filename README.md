# TechTalk

Matching application for learning new Tech languages and Frameworks.

## Set up

### Set up a postgres instance

- Make your own postgres instance on ElephantSQL
- add .env file to the root of the project, and add
  PG_URI=yourElephantStringThatStartsWithpostgres://
- run the techTalk_postgres_create.sql
  by using `psql -d -f techTalk_postgres_create.sql` in the terminal

### Change fetch IP addrss

- Inside App.js line 72 fetch call, replace 'http://192.168.1.126:3000/user/matches'
  with your own IP address like so:
  'http://yourIpAddress:3000/user/matches'

### install npm and expo font

In terminal, run
`npm install`
`expo install expo-font`

### Run server

Run the server `npm run server`
Run expo `npm start`
Use a simulator or expo client on your phone to scan QR code in terminal to see the app
