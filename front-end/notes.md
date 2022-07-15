


# Routes
 
## Reservations
All existing '/reservations' endpoints and their CRUD functionality.

<!-- Search for reservation by either date or phone number -->
<!-- NOTE: GET requests to /reservations require a query parameter of 'date' or 'mobile_number' -->
GET `/reservations` 
[search]

<!-- Create a new reservation -->
POST `/reservations` 

<!-- Get a specific reservation by id -->
GET `/reservations/:reservationId`

<!-- Modify an existing reservation by id -->
PUT `/reservations/:reservationId`

<!-- Delete a reservation by id -->
DELETE `/reservations/:reservationId`

<!-- Update a reservation status by id -->
PUT `/reservations/:reservationId/status`


## Tables
All existing '/tables' endpoints and their CRUD functionality.

<!-- Create a new table -->
POST `/tables`

<!-- List all tables -->
GET `/tables`

<!-- Find a specific table by id -->
GET `/tables/:tableId`

<!-- Update a table by id -->
PUT `/tables/:tableId`

<!-- Delete a table by id -->
DELETE `/tables/:tableId`

<!-- Seat a reservation at a table -->
PUT `/tables/:tableId/seat`

<!-- Unseat a reservation from a table -->
DELETE `/tables/:tableId/seat`
