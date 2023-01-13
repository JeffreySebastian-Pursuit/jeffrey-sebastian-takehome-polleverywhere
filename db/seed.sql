\c raffle_dev;

INSERT INTO users(first_name ,last_name, email, phone_number) VALUES
('Jeffrey', 'Sebastian', 'jeffreysebastian@testing.com', '123-456-7890'),
('Sample', 'Lastname', 'sample@email.com', '245-123-9901'),
('Joe', 'Joe', 'joe@email.com', '123-987-2345');


INSERT INTO raffles(created, raffled, users_id) VALUES
('Sat May 22 2021 at 7:59:27 PM', 'Sat May 22 2021 at 9:59:27 PM', 1),
('Sat May 22 2021 at 8:59:27 PM', 'Sat May 22 2021 at 10:59:27 PM', 2);

