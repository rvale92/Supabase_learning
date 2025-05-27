# 🐳 Dockerized Certification Study Platform 🚀

This document provides ALL THE DETAILS for building, running, and managing the Dockerized environment for the 📚 Certification Study Platform. The platform itself is a React/TypeScript application designed for IT certification preparation. This README focuses SOLELY on its containerization using Docker and Nginx.

ℹ️ Docker Environment Overview
This Docker setup provides a consistent and isolated environment to:

🏗️ BUILD the React/TypeScript frontend application into static assets.
🌐 SERVE these static assets using a lightweight and high-performance Nginx web server.
⚙️ MANAGE the application lifecycle through Docker Compose.
The containerized application is intended to connect to an external Supabase backend for its data and dynamic features. Configuration for this connection is managed via environment variables passed to the Docker container.

# 🛠️ Tech Stack (Containerization Focus)
Docker: Core containerization platform.
Docker Compose: Tool for defining and running multi-container Docker applications.
Nginx: Web server used to serve the built React application from within a Docker container.
React & TypeScript: The application code that is BUILT AND SERVED by this Docker environment.

# 🚀 Docker Setup and Usage ⚙️
Follow these steps to get the Dockerized Certification Study Platform running QUICKLY AND EASILY!

✅ Prerequisites
Git: To clone the repository.
Docker Engine & Docker Compose: Must be installed and running on your system (e.g., Docker Desktop).

📥 1. Clone the Repository
Bash

```git clone https://github.com/rvale92/Supabase_learning.git
cd Supabase_learning

# 🔑 2. Environment Configuration (Supabase Backend Connection)
This is CRUCIAL! The React application inside the Docker container needs to connect to your Supabase backend.

📝 Create a .env file in the root directory of the project (Supabase_learning/.env).

You can copy from an existing .env.example file if one is provided.
Add your Supabase project URL and Anon Key to this .env file. docker-compose.yml is typically configured to read this file. Ensure variable names match your application's needs (e.g., prefixed with VITE_ for Vite projects):

Code snippet

# Supabase_learning/.env
VITE_SUPABASE_URL=your_actual_supabase_url
VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
IMPORTANT NOTE: ⚠️ Replace your_actual_supabase_url and your_actual_supabase_anon_key with YOUR project's specific credentials from your Supabase dashboard.

🏗️ 3. Build and Run the Docker Container(s) 🔥

docker-compose.yml orchestrates this magic!

```Bash

docker compose up --build
--build: Forces Docker to rebuild the image(s) if the Dockerfile or related context has changed. Omit this to start faster if no code/config changes were made.

To run in detached mode (background):

```Bash

docker compose up --build -d

🔗 4. Accessing the Application 🌐
Once the Docker containers are UP AND RUNNING, the platform will be accessible via your web browser:

👉 URL: http://localhost:3000
(Verify the port in your docker-compose.yml under the ports section for the Nginx/app service.)

⚙️ 5. Managing the Dockerized Application

🛑 Stopping the Application:

To stop AND REMOVE the containers, networks, and volumes:

```Bash

docker compose down
To ONLY STOP the running containers without removing them:

Bash

docker compose stop
📜 Viewing Logs:
For real-time logs from ALL services:

Bash

docker compose logs -f
For logs from a SPECIFIC service (e.g., app or nginx):

Bash

docker compose logs -f app
🔄 Rebuilding the Image:
If you've made changes to the application code or Dockerfile:

Bash

docker compose build
OR

Bash

docker compose up --build
🧠 Understanding the Docker Configuration
📄 Dockerfile:

Typically uses a multi-stage build for efficiency.
Build Stage: Starts with a Node.js base, copies app source, installs dependencies (npm install or yarn), and builds the React app (npm run build). Environment variables (like VITE_SUPABASE_URL) are passed here using ARG and ENV to be included in the static build.
Production Stage: Starts with an Nginx base, copies built static assets from the build stage, and applies custom Nginx configuration.
📄 docker-compose.yml:

Defines the application service(s) (e.g., an app or nginx service).
Specifies build context and Dockerfile.
Manages port mappings (e.g., - "3000:80").
Passes build arguments (args) or environment variables (environment or env_file: .env) into the Docker build process or container runtime.
⚙️ Nginx Configuration (e.g., nginx.conf or default.conf):

Custom Nginx config (often copied via Dockerfile) tells Nginx how to serve the React app.
Sets the root directory for index.html and static assets.
Includes try_files directive for client-side routing (React Router) to work seamlessly.
🗂️ Relevant Project Files (for Docker)
Supabase_learning/
├── Dockerfile                 #  Blueprint to build the application image 🖼️
├── docker-compose.yml         # Defines services for Docker Compose ⚙️
├── .env                       # (Gitignored) Your LOCAL Supabase keys, etc. 🔑
├── .env.example               # Example structure for your .env file 📋
└── (nginx-config-folder)/     # Optional: Custom Nginx configuration files 📄
    └── default.conf           # Example: Custom Nginx site configuration
👨‍💻 Author
Reimundo Valentin
GitHub: @rvale92
