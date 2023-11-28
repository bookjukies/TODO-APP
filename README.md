# TODO-APP

## Project Structure

The repository is organized into two main directories:
- **client**: Contains the frontend code.
- **server**: Houses the backend code.

## Getting Started

To run the app locally, follow these steps:

### Frontend

1. Navigate to the **client** directory in your terminal.
2. Run the following command to install dependencies:
    ```bash
    $ npm install
    ```
3. Start the frontend server:
    ```bash
    $ npm run start
    ```
   Make sure you have Node.js and npm installed on your machine.

### Backend

1. Create a MongoDB account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new project and obtain your project credentials.
3. In the root directory of the **server** folder, create a file named `.env`.
4. Inside the `.env` file, set up the `DATABASE_URI` using your MongoDB credentials.
    ```env
    DATABASE_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    ```
5. Navigate to the **server** directory in your terminal.
6. Run the following command to install backend dependencies:
    ```bash
    $ npm install
    ```
7. Start the backend server:
    ```bash
    $ npm run start
    ```

Ensure that these steps are followed consistently to set up and run the MERN (MongoDB, Express.js, React, Node.js) app on your local environment.






