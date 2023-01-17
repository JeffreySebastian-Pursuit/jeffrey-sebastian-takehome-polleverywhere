DROP TABLE IF EXISTS raffles CASCADE;
DROP TABLE IF EXISTS participants CASCADE;


CREATE TABLE raffles(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    secret_token TEXT NOT NULL,
    created TEXT NOT NULL,
    raffled TEXT NOT NULL
);


CREATE TABLE participants(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email VARCHAR NOT NULL,
    phone_number VARCHAR,
    token TEXT NOT NULL,
    winner BOOLEAN,
    raffles_id INTEGER REFERENCES raffles(id) ON DELETE CASCADE
);
