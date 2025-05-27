# 🐳 Dockerized Certification Study Platform 🚀

This document provides ALL THE DETAILS for building, running, and managing the Dockerized environment for the 📚 Certification Study Platform. The platform itself is a React/TypeScript application designed for IT certification preparation. This README focuses SOLELY on its containerization using Docker and Nginx.

## ℹ️ Docker Environment Overview

This Docker setup provides a consistent and isolated environment to:

* 🏗️ BUILD the React/TypeScript frontend application into static assets
* 🌐 SERVE these static assets using a lightweight and high-performance Nginx web server
* ⚙️ MANAGE the application lifecycle through Docker Compose

The containerized application is intended to connect to an external Supabase backend for its data and dynamic features. Configuration for this connection is managed via environment variables passed to the Docker container.

## 🛠️ Tech Stack (Containerization Focus)

* Docker: Core containerization platform
* Docker Compose: Tool for defining and running multi-container Docker applications
* Nginx: Web server used to serve the built React application
* React & TypeScript: The application code that is BUILT AND SERVED by this Docker environment

## 🚀 Docker Setup and Usage ⚙️

Follow these steps to get the Dockerized Certification Study Platform running QUICKLY AND EASILY!

### ✅ Prerequisites

* Git: To clone the repository
* Docker Engine & Docker Compose: Must be installed and running on your system

### 📥 1. Clone the Repository

```bash
git clone https://github.com/rvale92/Supabase_learning.git
cd Supabase_learning
```

### 🔑 2. Environment Configuration (Supabase Backend Connection)

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_actual_supabase_url
VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
```

⚠️ Replace the values with YOUR project's specific credentials from your Supabase dashboard.

### 🏗️ 3. Build and Run the Docker Container(s)

```bash
# Build and run
docker compose up --build

# Run in detached mode
docker compose up --build -d
```

### 🔗 4. Accessing the Application

Once running, access the platform at:
http://localhost:3000

### ⚙️ 5. Managing the Dockerized Application

**Stop the Application:**
```bash
# Stop and remove containers
docker compose down

# Only stop containers
docker compose stop
```

**View Logs:**
```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f app
```

**Rebuild:**
```bash
docker compose build
# or
docker compose up --build
```

## 🧠 Understanding the Docker Configuration

### 📄 Dockerfile

* Multi-stage build for efficiency
* Build Stage: Node.js base
  - Installs dependencies
  - Builds React app
  - Handles environment variables
* Production Stage: Nginx base
  - Serves static assets
  - Custom Nginx configuration

### 📄 docker-compose.yml

* Defines services
* Manages port mappings
* Handles environment variables
* Configures volumes

### ⚙️ Nginx Configuration

* Custom server configuration
* Static asset serving
* Client-side routing support

## 🗂️ Relevant Project Files
