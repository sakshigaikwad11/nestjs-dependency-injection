# NestJS Dependency Injection

## Project Overview
This project demonstrates Dependency Injection in NestJS using Products, Users, Orders, and Logger modules.

## Features
- Products module with GET and POST routes
- Shared LoggerService injected into multiple modules
- Orders module depending on Users and Products modules
- Repository-style methods: `findAll()`, `findById()`, and `create()`
- DTO validation for user input

## Technologies Used
- NestJS
- TypeScript
- Node.js
- Express

## GitHub Repository
https://github.com/sakshigaikwad11/nestjs-dependency-injection

## Deployment
Platform: Netlify

Deployment URL: Add your Netlify site URL here.

**Note:** The Netlify deployment is currently experiencing an HTTP 500 error on the API endpoint. The API deployment needs further verification.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start:dev
```

The API will be available at:

http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| POST | `/products` | Create a product |
| GET | `/users` | Get users |
| POST | `/orders` | Create an order |

## Author
Sakshi Gaikwad