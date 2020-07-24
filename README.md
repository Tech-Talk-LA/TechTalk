# TechTalk

Matching application for learning new Tech languages and Frameworks.

## Set up

Make your own postgres instance on ElephantSQL
add a .env file to the root of the project, and add

PG_URI=yourElephantStringThatStartsWithpostgres://
run the techTalk_postgres_create.sql
by using `psql -d -f techTalk_postgres_create.sql` in the terminal

Run the server `npm run server`
Run expo `npm start`
Use a simulator or expo client on your phone to scan QR code in terminal to see the app
