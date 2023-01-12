# jeffrey-sebastian-takehome-polleverywhere

#Create a client for a Raffle application. Users are able to:

Create raffles
List all raffles
Add participants users to raffles
Draw a winner from a raffle, etc.
Notes:

You may use any 3rd-party libraries or packages for functionality or styling.
We recommend you use something like Bootstrap or Material UI or others to style you app.
API
Use the details and endpoints of the API below to guide the development of your API. This API should accept and return JSON payloads.

Method	Endpoint	Description	Example JSON Body Payload
GET	/api/raffles	List all raffles	n/a
POST	/api/raffles	Create a raffle	{ "name": "My first Raffle", "secret_token": "s3CrE7" }
GET	/api/raffles/:id	Retrieve a raffle by id	n/a
GET	/api/raffles/:id/participants	Retrieve all participants of a raffle	n/a
POST	/api/raffles/:id/participants	Sign up a participant for a raffle	{ "firstname": "Jane", "lastname": "Doe", "email": "jdoe@email.com", "phone": "+1 (917) 555-1234", }
PUT	/api/raffles/:id/winner	Pick a winner from the participants at random for a raffle	{ "secret_token": "s3CrE7" }
GET	/api/raffles/:id/winner	Retrieve the winner of a raffle	
Notes
A secret_token must be provided when creating a raffle. This token can be any random string and will be used when picking a winner for the raffle. Only if the creation token matches the one in the PUT request to pick a winner the raffle will be performed and a winner will be awarded.
When adding a participant to a raffle all fields are required but phone
