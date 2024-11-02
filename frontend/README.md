# MERNCrudWorkout - Frontend

This is the frontend repository for the **MERNCrudWorkout** project, a simple CRUD app that allows users to track workout routines. The app uses **React** and **Material UI** for the interface. The backend is built with **MongoDB**, **Express**, and **Node.js**, though it is not covered in this specific README.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [License](#license)

---

## Demo
Check out the live demo [here](#) (link the live demo if available).

## Features
- **Create, Read, Update, Delete** functionality for workout records.
- User-friendly interface with **Material UI** components.
- **Responsive design** for desktop and mobile devices.

## Technologies
- **React** - Frontend library for building user interfaces.
- **Material UI** - Design framework for a clean and responsive UI.
- **Axios** - For making HTTP requests to the backend.

## Getting Started

### Prerequisites
To run this project, you need to have Node.js and npm installed.

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MERNCrudWorkout.git
   cd MERNCrudWorkout/frontend
    ```
2. Install dependecies (first move to 'frontend' folder):
    ```bash
    npm install
    ```
3. Run the app
    ```bash
    npm start
    ```

## Folder Structure

```bash
frontend/
├── public/           # Public files
├── src/
│   ├── components/   # Reusable components (e.g., Navbar, WorkoutList, WorkoutForm)
│   ├── pages/        # Pages (e.g., Home, WorkoutDetails, CreateWorkout)
│   ├── App.js        # Main App component
│   └── index.js      # Entry point
├── .env              # Environment variables
└── package.json      # Project metadata and scripts
```

## Available scripts
In the project directory, you can run:

`npm start`

Runs the app in the development mode. Open http://localhost:5173 to view it in your browser.
The page will reload if you make edits. You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the build folder. It bundles React in production mode and optimizes the build for the best performance.

`npm run test`

Launches the test runner in the interactive watch mode. Additional configuration may be added for testing.

`npm run eject`

Note: this is a one-way operation. Once you eject, you can’t go back!
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) directly into your project so you have full control over them.

## License
This project is licensed under the MIT License.