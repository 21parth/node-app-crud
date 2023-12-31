# Node-App

Simple node app for CRUD operations.

## Table of Contents

- [Getting Started](#getting-started)
  - [Setup Manually](#setup-manually)
  - [Using Docker](#using-docker)
- [Additional Information](#additional-information)

## Getting Started

These instructions will guide you on setting up the project locally.

### Setup Manually

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Download the ZIP File:**
   - Go to the [GitHub repository](https://github.com/21parth/node-app-crud).
   - Click on the "Code" button, and select "Download ZIP."
   - Extract the downloaded ZIP file to your desired location.

2. **Navigate to the Project Directory:**
   - Open a terminal or command prompt.
   - goto the project directory.

3. **Install Dependencies:**
   - Run the following command to install project dependencies:
     ```bash
     npm ci
     ```

4. **Start the Node.js Server:**
   - Start the Node.js server with the following command:
     ```bash
     PORT=4000 npm run dev
     ```
   - Replace 4000 with your desired port number which is free on your machine.
5. **Access the Application:**
   - Open your web browser and go to `http://localhost:4000` or `http://localhost:<your_specified_port>`.

## Using Docker

Alternatively, you can run the Node-App using Docker.

### Prerequisites

- Docker installed on your machine. if not you can download Docker desktop from here [Docker Desktop](https://www.docker.com/products/docker-desktop/)
### Usage
1. **Download the ZIP File:**
   - Go to the [GitHub repository](https://github.com/21parth/node-app-crud).
   - Click on the "Code" button, and select "Download ZIP."
   - Extract the downloaded ZIP file to your desired location.

2. **Navigate to the Project Directory:**
   - Open a terminal or command prompt.
   - goto the project directory.
  
3. **Build the Docker Image:**
    - Build the Docker image with the following command:
      ```bash
      docker build -t node-app-image .
      ```

4. **Run the Docker Container:**
    - Run the Docker container with the following command:
      ```bash
      docker run -p 4000:4000 node-app-image
      ```
   - Explanation: `docker run -p <host_port>:<container_port> node-app-image` 
      - Here, The app is running in the container_port 4000. That container_port is mapped to your host_port. So replace the host_port with your specified port which is free on your machine.

3. **Access the Application:**
    - Open your web browser and go to `http://localhost:4000` or `http://localhost:<your_specified_port>`.

### Additional Information:
   - Check the project's `README.md` file for any specific instructions.
