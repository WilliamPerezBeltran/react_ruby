# Task Tracker Frontend

This project is a **React.js frontend** for the Task Tracker API.
It allows users to create tasks and view the list of existing tasks.

---

## Requirements

* Node.js 18.x or higher

node --version 
v18.6.0

* npm or yarn
* Access to Task Tracker API (Rails) running at `http://localhost:3000` (or your API URL)

---

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

* The frontend will run by default on `http://localhost:3001`
* Ensure the Rails API is running and accessible to avoid CORS or 404 errors.

---

## Frontend Features

1. **Task Creation Form**

* Input field for task description
* Submit button to add a task
* Sends POST request to `http://localhost:3000/tasks`

2. **Task List Display**

* Displays all tasks retrieved from `GET /tasks`
* Lists tasks in descending order (newest first)

---

## Running Tests

This frontend uses **Jest** and **React Testing Library** for testing components.

1. Ensure dependencies are installed:


2. Run tests:

```bash
npm test
```

* Tests include:

  * Rendering of the main `TaskList` component
  * Adding a new task and verifying the list updates
  * Handling API errors

---


## Project Structure
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
