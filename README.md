# 🐾 PetPal

**PetPal** is a full-stack pet adoption demo built with **React, Vite, Node.js, and Express**.

The application allows users to browse randomly generated pets, view their images and personality traits, adopt pets, and return them through an interactive interface.

This project demonstrates frontend state management, REST API integration, asynchronous JavaScript, and communication between a React frontend and an Express backend.

## ✨ Features

- **Browse Pets:** View randomly generated pets with unique names, animal types, personalities, and images.
- **Adopt Pets:** Adopt an available pet and update its adoption status.
- **Return Pets:** Return an adopted pet and make it available again.
- **Refresh Pets:** Generate a new selection of pets without refreshing the browser.
- **Dynamic Images:** Fetch pet images using external animal APIs.
- **Responsive Design:** Pet cards adapt to different screen sizes.
- **Loading States:** Display loading feedback while retrieving pet information.

> **Note:** PetPal is a demonstration application, not a real animal adoption service. Adoption status is currently managed in frontend state and is not permanently stored in a database.

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite 8
- JavaScript (ES6+)
- JSX
- CSS
- Fetch API

### Backend

- Node.js
- Express.js 5
- RESTful API
- CORS
- Nodemon

### External APIs

- [Dog CEO API](https://dog.ceo/dog-api/) — Random dog images
- [The Cat API](https://thecatapi.com/) — Random cat images

## 📁 Project Structure

```text
PetPal/
├── backend/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── PetCard.jsx
│   └── package.json
│
└── README.md
```

Only the main application files are shown.

## 🚀 Getting Started

Follow these instructions to run PetPal locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/overkill489/PetPal.git
cd PetPal
```

### 2. Install and Run the Backend

Navigate to the backend directory:

```bash
cd backend
npm install
npm run dev
```

The Express server runs at:

```text
http://localhost:3001
```

### 3. Install and Run the Frontend

Open a second terminal in the project root.

```bash
cd frontend
npm install
npm run dev
```

The frontend typically runs at:

```text
http://localhost:5173
```

Open the URL displayed in your terminal to view the application.

**Important:** Both the frontend and backend servers must be running for PetPal to function correctly.

## 🔌 API Endpoints

PetPal uses a REST API built with Express.js.

Base URL:

```text
http://localhost:3001
```

| Method | Endpoint          | Description                             |
| ------ | ----------------- | --------------------------------------- |
| GET    | `/api/pets`       | Generate and retrieve three random pets |
| POST   | `/api/adopt/:id`  | Acknowledge a pet adoption request      |
| DELETE | `/api/return/:id` | Acknowledge a pet return request        |

### Example Pet Response

```json
[
  {
    "id": 1,
    "name": "Buddy",
    "type": "Dog",
    "traits": ["Friendly"],
    "image": "https://example.com/dog.jpg",
    "adopted": false
  }
]
```

This is an illustrative response. The actual API generates three pets with randomized details.

## ⚙️ How It Works

### 1. Fetching Pets

When the application loads, React's `useEffect` hook triggers an API request to the Express backend.

The backend generates random pet information and retrieves images from external APIs.

The frontend stores the response using React's `useState` hook.

### 2. Displaying Pets

Each pet is rendered using a reusable `PetCard` component.

Pet cards display information such as:

- Pet name
- Animal type
- Personality traits
- Pet image
- Adoption status

### 3. Adopting Pets

When the user clicks the adoption button:

1. The frontend updates the pet's adoption status.
2. A POST request is sent to the backend.
3. The backend acknowledges the adoption request.
4. The interface reflects the updated state.

### 4. Returning Pets

When a user returns an adopted pet:

1. The frontend updates the pet's adoption status.
2. A DELETE request is sent to the backend.
3. The backend acknowledges the return request.
4. The pet becomes available again in the interface.

### 5. Refreshing Pets

Users can generate a new selection of pets.

The frontend sends another request to `/api/pets`, and the backend returns newly generated pet data.

## 🧠 Concepts Demonstrated

This project showcases practical full-stack development concepts.

### React

- Functional components
- Component-based architecture
- State management with `useState`
- Side effects with `useEffect`
- Props and reusable components
- Conditional rendering
- Event handling

### JavaScript

- Asynchronous programming
- `async` / `await`
- Fetch API
- Array methods
- Object manipulation
- JSON data handling

### Backend Development

- Creating an Express server
- REST API route handling
- HTTP methods
- Request parameters
- JSON responses
- CORS configuration
- Integrating third-party APIs

## ⚠️ Current Limitations

PetPal is an educational full-stack project and has several limitations:

- Pet information is randomly generated rather than retrieved from a real adoption database.
- Adoption records are not permanently stored.
- Refreshing the application resets adoption status.
- External image APIs may occasionally fail.
- The frontend currently communicates with a locally hosted backend.

## 🔮 Future Improvements

Potential features for future development include:

- [ ] Implement MongoDB or PostgreSQL for persistent storage
- [ ] Add user authentication
- [ ] Create individual pet detail pages
- [ ] Add animal type and personality filters
- [ ] Implement a pet search feature
- [ ] Add favorites and saved pets
- [ ] Improve API error handling
- [ ] Add image fallback placeholders
- [ ] Implement automated testing
- [ ] Deploy the frontend and backend

## 🎯 Project Purpose

PetPal was developed to strengthen practical full-stack web development skills.

The primary objectives were to:

1. Build a React frontend using reusable components.
2. Create a RESTful backend with Node.js and Express.
3. Connect frontend functionality to backend API routes.
4. Integrate third-party APIs.
5. Manage asynchronous operations and application state.
6. Build an interactive application from frontend to backend.

## 👨‍💻 Author

**Jeremiah Austin**

Full-Stack Web Developer

GitHub: [@overkill489](https://github.com/overkill489)

## 🔗 Repository

**GitHub:** [PetPal](https://github.com/overkill489/PetPal)

---

Built with React, Node.js, and Express.
