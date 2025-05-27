Dockerized Certification Study Platform

This document provides instructions and details for building, running, and managing the Dockerized environment for the Certification Study Platform. The platform itself is a React/TypeScript application designed for IT certification preparation. This README focuses solely on its containerization using Docker and Nginx.

Docker Environment Overview
This Docker setup provides a consistent and isolated environment to:

Build the React/TypeScript frontend application into static assets.
Serve these static assets using a lightweight and high-performance Nginx web server.
Manage the application lifecycle through Docker Compose.
The containerized application is intended to connect to an external Supabase backend for its data and dynamic features. Configuration for this connection is managed via environment variables passed to the Docker container at build or run time.

Tech Stack (Containerization Focus)
Docker: Core containerization platform.
Docker Compose: Tool for defining and running multi-container Docker applications.
Nginx: Web server used to serve the built React application from within a Docker container.
React & TypeScript: The application code that is built and served by this Docker environment.
Docker Setup and Usage
Follow these steps to get the Dockerized Certification Study Platform running.

Prerequisites
Git: To clone the repository.
Docker Engine & Docker Compose: Must be installed and running on your system (e.g., Docker Desktop).
1. Clone the Repository
Bash

git clone https://github.com/rvale92/Supabase_learning.git
cd Supabase_learning
2. Environment Configuration (Supabase Backend Connection)
The React application inside the Docker container needs to connect to your Supabase backend. These credentials are provided as environment variables during the Docker build process or to the running container.

Create a .env file in the root directory of the project (Supabase_learning/.env).

You can copy from an existing .env.example file if one is provided.
Add your Supabase project URL and Anon Key to this .env file. The docker-compose.yml file is typically configured to read this file. Ensure variable names match your application's needs (e.g., prefixed with VITE_ for Vite projects):

Code snippet

# Supabase_learning/.env
VITE_SUPABASE_URL=your_actual_supabase_url
VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
Replace placeholder values with your actual Supabase credentials.
These variables will be used by the Dockerfile during the npm run build (or equivalent) step to bake them into the static application code, or made available to Nginx/the application at runtime.

3. Build and Run the Docker Container(s)
The docker-compose.yml file orchestrates the build and run process.

Bash

docker compose up --build
--build: Forces Docker to rebuild the image(s) if the Dockerfile or related context has changed. Omit this flag to start faster if no code/config changes were made.
To run in detached mode (background):
Bash

docker compose up --build -d
4. Accessing the Application
Once the Docker containers are running, the platform will be accessible via your web browser. The default port is typically 3000 on your host machine, mapped to port 80 (Nginx) inside the container.

URL: http://localhost:3000
(Verify the port in your docker-compose.yml under the ports section for the Nginx/app service.)

5. Managing the Dockerized Application
Stopping the Application:
To stop and remove the containers, networks, and volumes defined in docker-compose.yml:

Bash

docker compose down
To only stop the running containers without removing them:

Bash

docker compose stop
Viewing Logs:
For real-time logs from all services:

Bash

docker compose logs -f
For logs from a specific service (e.g., if your service is named app or nginx in docker-compose.yml):

Bash

docker compose logs -f app
Rebuilding the Image:
If you've made changes to the application code or Dockerfile:

Bash

docker compose build
# or
docker compose up --build
Understanding the Docker Configuration
Dockerfile:

Typically uses a multi-stage build.
Build Stage: Starts with a Node.js base image, copies application source code, installs dependencies (npm install or yarn), and builds the React application (npm run build or yarn build). Environment variables (like VITE_SUPABASE_URL) are often passed in during this stage using ARG and ENV instructions to be included in the static build.
Production Stage: Starts with an Nginx base image, copies the built static assets from the build stage, and copies a custom Nginx configuration file (if any) to correctly serve the React application (e.g., handling client-side routing).
docker-compose.yml:

Defines the service(s) for the application (e.g., an app or nginx service).
Specifies the build context (usually .) and the Dockerfile to use.
Manages port mappings (e.g., - "3000:80").
Can pass build arguments (args) or environment variables (environment or env_file: .env) from the host (or the .env file) into the Docker build process or the runtime environment of the container.
Nginx Configuration (e.g., nginx.conf or default.conf):

A custom Nginx configuration file (often copied into the Nginx image via the Dockerfile) tells Nginx how to serve the React app.
Key aspects include setting the root directory to the location of the index.html and static assets.
Includes a try_files directive to ensure client-side routing (React Router) works correctly by redirecting all non-file requests to index.html.
Relevant Project Files (for Docker)
Supabase_learning/
├── Dockerfile                 # Instructions to build the application image
├── docker-compose.yml         # Defines services, networks, volumes for Docker Compose
├── .env                       # (Gitignored) Your local environment variables for Supabase, etc.
├── .env.example               # Example structure for the .env file
└── (nginx-config-folder)/     # Optional: Folder containing custom Nginx configuration
    └── default.conf           # Example: Custom Nginx site configuration
Author
Reimundo Valentin
GitHub: @rvale92
