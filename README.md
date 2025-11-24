# react_ruby


Project Structure

The instructions for setting up the projects are in each front-end and back-end repository readme.

The project is structured in a mono-repo with separate directories for backend and frontend:

task-tracker/
├── task-tracker-api/          # Rails API
└── task-tracker-frontend/     # React SPA
└── README


Reasoning:

Keeping backend and frontend separate makes the responsibilities clear. Rails handles API requests and database persistence, while React handles the user interface and frontend logic.

This structure simplifies local development, allows independent installation of dependencies, and avoids mixing frontend and backend configurations.

Mono-repo ensures everything is in a single project folder, making it easy to clone and run the full application.