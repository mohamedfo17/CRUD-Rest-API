# Book Management API

This is a CRUD REST API for managing books, built with Express.js, Node.js, and MongoDB.

## Features
- Create a new book
- Retrieve all books
- Retrieve a single book by ID
- Update a book's details
- Delete a book

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedfo17/CRUD-Rest-API
   cd CRUD-Rest-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add your MongoDB connection string:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the server:
   ```bash
   nodemon start
   ```

## API Endpoints

### Create a Book
- **Endpoint:** `POST /books`
- **Description:** Adds a new book to the database.
- **Request Body:**
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "publishedYear": 2024
  }
  ```

### Get All Books
- **Endpoint:** `GET /books`
- **Description:** Retrieves a list of all books.

### Get a Single Book by ID
- **Endpoint:** `GET /books/:id`
- **Description:** Retrieves a book by its ID.

### Update a Book
- **Endpoint:** `PUT /books/:id`
- **Description:** Updates an existing book's details.
- **Request Body:** (Provide the fields you want to update)
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author"
  }
  ```

### Delete a Book
- **Endpoint:** `DELETE /books/:id`
- **Description:** Removes a book from the database.



---



