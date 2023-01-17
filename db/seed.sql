\c raffle_dev;

INSERT INTO raffles(name,secret_token,created, raffled) VALUES
('Sample Raffle', 'abcsqwer1','2013-02-08 09:30', '2013-02-08 10:30 '),
('joes raffle','dhadlh3','2013-02-08 05:30 ', '2013-02-08 06:30 ');

INSERT INTO participants(first_name ,last_name, email, phone_number, token, winner, raffles_id) VALUES
('Jeffrey', 'Sebastian', 'jeffreysebastian@testing.com', '123-456-7890', 'abcsqwer1', 'true', 1),
('Sample', 'Lastname', 'sample@email.com', '245-123-9901', 'dhadlh3', 'false', 1),
('Joe', 'Joe', 'joe@email.com', '123-987-2345', 'asdfh2', 'false', 2);



