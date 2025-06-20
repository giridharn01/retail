# Integrated Web Solution for Retail and Agri-Tech Services

A full-stack MERN application for managing retail products and after-sale services, specifically designed for small-to-medium businesses in rural and semi-urban areas.

## Features

### Admin Features
- Product inventory management
- Service request processing
- Order management
- Stock level monitoring
- Low stock alerts

### Customer Features
- User registration and authentication
- Product browsing and searching
- Shopping cart functionality
- Order placement and tracking
- Service request submission and tracking

## Tech Stack
- Frontend: React.js with Tailwind CSS
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT

## Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── layouts/       # Layout components
│   │   ├── pages/         # Route-level views
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Utility functions
│   └── public/            # Static files
│
└── server/                # Backend Node.js application
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── middleware/       # Custom middleware
    ├── models/          # Mongoose models
    └── routes/          # API routes
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with the following variables:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## API Documentation

### Authentication Routes
- POST /api/auth/signup - Register a new user
- POST /api/auth/signin - Login user

### Product Routes
- GET /api/products - Get all products
- GET /api/products/:id - Get product by ID
- POST /api/products - Create new product (admin only)
- PUT /api/products/:id - Update product (admin only)
- DELETE /api/products/:id - Delete product (admin only)

### Order Routes
- GET /api/orders - Get user orders
- POST /api/orders - Create new order
- GET /api/orders/:id - Get order details
- PUT /api/orders/:id - Update order status (admin only)

### Service Routes
- POST /api/services - Create service request
- GET /api/services - Get user service requests
- PUT /api/services/:id - Update service request status

## Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control
- Input validation and sanitization
- CORS protection
- Rate limiting
- Security headers with Helmet #
