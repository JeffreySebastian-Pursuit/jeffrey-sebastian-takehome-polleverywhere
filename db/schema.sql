DROP DATABASE IF EXISTS raffle_dev;
CREATE DATABASE raffle_dev;

\c raffle_dev;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS raffle;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email VARCHAR NOT NULL,
    phone_number VARCHAR

);



CREATE TABLE raffles(
    id SERIAL PRIMARY KEY,
    created TEXT NOT NULL,
    raffled TEXT NOT NULL,
    users_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);
