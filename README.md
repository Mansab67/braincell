Fetch user data from an API

Search users by name

Sort users alphabetically (ascending & descending)

Display loading state while fetching data

Handle errors gracefully

Installation





Install dependencies:

npm install

Usage

Start the development server:

npm start

Open your browser and go to:

http://localhost:8081/api/fetch-users 

API

The application fetches users from https://jsonplaceholder.typicode.com/users.

The backend also provides two routes:

GET http://localhost:8081/api/fetch-users - Fetch all users

GEThttp://localhost:8081 /api/list-users?name=xyz&sort=asc - Search and sort users
