\c raffle_dev;

INSERT INTO raffles(name,secret_token,created, raffled) VALUES
('Sample Raffle', 'abcsqwer1','Sat May 22 2021 at 7:59:27 PM', 'Sat May 22 2021 at 9:59:27 PM'),
('joes raffle','dhadlh3','Sat May 22 2021 at 8:59:27 PM', 'Sat May 22 2021 at 10:59:27 PM');

INSERT INTO participants(first_name ,last_name, email, phone_number, token, winner, raffles_id) VALUES
('Jeffrey', 'Sebastian', 'jeffreysebastian@testing.com', '123-456-7890', 'abcsqwer1', 'true', 1),
('Sample', 'Lastname', 'sample@email.com', '245-123-9901', 'dhadlh3', 'true', 1),
('Joe', 'Joe', 'joe@email.com', '123-987-2345', 'asdfh2', 'false', 2);



