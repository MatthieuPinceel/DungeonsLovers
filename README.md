# Maintenance Application

A full-stack web application displaying items and user accounts. The frontend uses Vue and the backend uses MySQL.

### Developers
- **Groupe** - 9 - **Piquet Edwyn** - **Pinceel Matthieu**

## Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web server framework
- **MySQL** - Relational database
- **mysql** - MySQL client library
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management
- **jsonwebtoken** - JWT authentication

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Axios** - HTTP client library
- **Pinia** - State management
- **vue-router** - Client-side routing
- **CSS3** - Styling and responsive design

## Prerequisites

- **Node.js** - v20.19.0 or higher (v22.12.0+ recommended)
- **npm** - v10 or higher
- **MySQL Server** - v5.7 or higher running on localhost:3306

## Installation

### 1. Clone or extract the project

```sh
cd https://github.com/MatthieuPinceel/DungeonsLovers
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure the database

#### Create the database and schema:

1. Open MySQL (CLI)
2. Execute the SQL scripts:
   ```sql
   create_database.sql;
   ```
   ```sql
   fill_database.sql;
   ```

3. This will create the `DungeonDatabase` database with the following tables:
   - `users` - Users accounts and credentials
   - `heroes` - Displayed "items"
   - `resistances` - Used for items
   - `otherInfos` - Used for items

## Running the Application

### Development Mode (Frontend + Backend)

```sh
npm run dev:full
```

This command runs both services concurrently:
- **Backend**: http://localhost:3000
- **Frontend**: http://localhost:5173


## API Endpoints

### Users
- `POST /authentification/login` - Logins and generates a JWT token
- `POST /authentification/register` - Registers, create a new user and generates a JWT token
- `GET /users/getUsers` - Get all users (protected)
- `GET /users/getuser/:id` - Get an user by ID (protected)
- `POST /users/createUser/:id` - Creates an user
- `PUT /users/editUser/:id` - Modifies an user by ID (protected)
- `DELETE /users/deluser/:id` - Delete user

### Items
- `GET /api/items` - Get all items and infos about them

## Features

- **User Management** - Create, read, update, and delete user accounts
- **JWT Authentication** - Secure token-based authentication with 1-hour expiry
- **RESTful API** - Clean and standard API endpoints with authentication
- **Database Persistence** - Reliable MySQL backend storage
- **Protected Routes** - Some routes are protected with a JWT

