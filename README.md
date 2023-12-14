# Node-App

Simple node app for CRUD operations.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Using Docker](#using-docker)
- [Additional Information](#additional-information)

## Getting Started

These instructions will guide you on setting up the project locally.

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
     npm run dev
     ```

5. **Access the Application:**
   - Open your web browser and go to `http://localhost:4000`.

## Using Docker

Alternatively, you can run the Node-App using Docker.

### Prerequisites

- Docker installed on your machine.
### Usage

1. **Build the Docker Image:**
    - Build the Docker image with the following command:
      ```bash
      docker build -t node-app-image .
      ```

2. **Run the Docker Container:**
    - Run the Docker container with the following command:
    - You can use port which is free on your machine like if your port 4999 is free you can write `docker run -p 4999:4000 node-app-image`
      ```bash
      docker run -p 4000:4000 node-app-image
      ```

3. **Access the Application:**
    - Open your web browser and go to `http://localhost:4000` or `http://localhost:{your-specified-port}`.

### Additional Information:
   - Check the project's `README.md` file for any specific instructions.
