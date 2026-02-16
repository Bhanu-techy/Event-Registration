#Title

***Event Registration App***

## 1. Objective

The goal is to develop a full-stack platform where users can discover, view, and manage event registrations. The application must handle dynamic data fetching, user authentication, and state management efficiently, providing a seamless "Event Discovery Experience.

## 2. Technical Requirements

### **Frontend**

- **React.js**: Functional components and Hooks (`useState`, `useEffect`, `useContext` or `Redux`).

### **Backend**

- **Node.js & Express.js**: To handle API requests and routing.
- **Authentication**: JSON Web Tokens (JWT) and `bcryptjs` for password hashing.
- **Database**: MongoDB or SQLite for flexible schema design.

### **Deployment & Tools**

- **Frontend Hosting**: Vercel or Netlify.
- **Backend Hosting**: Render or Railway.
- **Version Control**: Git & GitHub.
- **Testing**: Postman or Insomnia for API testing.

- **Testing**: Postman or Insomnia for API testing.

## 3. Step-by-Step Instructions

### **Phase 1: Backend Setup & Database Modeling**

1. **Initialize Project**: Create a `server` folder and run `npm init -y`. Install `express`, `mongoose`, `dotenv`, `cors`, and `jsonwebtoken`.
2. **Database Connection**: Connect your Express app to MongoDB Atlas using a connection string in a `.env` file.
3. **Create Schemas**:
    - **User Schema**: Fields for name, email (unique), and hashed password.
    - **Event Schema**: Name, organizer, location, date, description, capacity, and category.
    - **Registration Schema**: Links `UserId` to `EventId`.

### **Phase 2: Authentication API**

1. **Signup Route**: Validate user input, hash the password, and save to DB.
2. **Login Route**: Verify credentials and return a JWT token.
3. **Middleware**: Write a `protect` function to verify JWT tokens before allowing access to registration routes.

### **Phase 3: Event & Registration Logic**

1. **Seeding Data**: Create a script to populate your DB with 10–20 mock events to test the "Large Collection" requirement.
2. **Search & Filter Logic**: Implement backend queries using Regex for text search and filter parameters for location/category.
3. **Registration Logic**: Ensure a user cannot register twice for the same event and that registration fails if the "capacity" is reached.

### **Phase 4: Frontend Core (UI/UX)**

1. **Setup Routing**: Define routes for `/login`, `/register`, `/events`, `/event/:id`, and `/dashboard`.
2. **Authentication Context**: Create a Global State to store the logged-in user's data and token.
3. **Discovery Page**: Build the event grid. Implement a search bar and filter dropdowns that update the API call in real-time.

### **Phase 5: User Dashboard**

1. **Fetching Data**: Fetch only the events where the `userId` matches the logged-in user.
2. **Categorization**: Sort the fetched data into "Upcoming" (date > today) and "Past" (date < today) sections in the UI.

### **Phase 6: Deployment & Video Recording**

1. **Deploy**: Push backend to Render and frontend to Vercel. Ensure the frontend "Base URL" points to the live backend.
2. **Recording**:
    - Demo the user flow (Register -> Search -> Register for Event).
    - Briefly show the folder structure.
    - Explain the DB relations (User <-> Registration <-> Event).

## 4. Project Structure

```

root/
├── server/
│   ├── models/        # Mongoose Schemas (User, Event)
│   ├── routes/        # API Endpoints (authRoutes, eventRoutes)
│   ├── middleware/    # Auth guards
│   ├── .env           # DB URI, JWT Secret
│   └── server.js      # Entry point
├── client/
│   ├── src/
│   │   ├── components/ # Reusable UI (Navbar, EventCard)
│   │   ├── pages/      # Home, Dashboard, EventDetails
│   │   ├── context/    # User authentication state
│   │   └── App.js      # Routes
│   └── package.json
└── README.md

```
### User Credentials

<details>
<summary>Click to view user credentials</summary>

<br/>

**You can use any one of the following credentials**

```text
  email: bhanu@gmail.com
  password: joy@85
```

```text
  email: varaprasad@gmail.com
  password: vara@1234
```

```text
 email: rahul
 password: rahul@1234
```

<br/>
</details>

