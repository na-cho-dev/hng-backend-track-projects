# HNG12 Stage 0 Backend Track Task - Public API

## Introduction

Welcome to my submission for the **HNG12 Stage 0 Backend Task**. This project is a simple public API built using **Node.js and Express.js** that returns basic information in JSON format.

## Features

- Returns a JSON response containing:
  - My registered email address for HNG12.
  - The current datetime in **ISO 8601** format (UTC).
  - The GitHub URL of this project's repository.
- CORS support for cross-origin requests.
- Deployed to a publicly accessible endpoint.

## Technology Stack

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework for Node.js)
- **GitHub** (Version control and repository hosting)

## API Documentation

### Endpoint
| Method    | Endpoint                                               | Description            |
| ------    | ------------------------------------------------------ | ---------------------- |
| GET       | `https://hng-backend-track-stage-0-task.onrender.com/` | Retrieve basic details |
|

### Sample Response (200 OK)

```json
{
  "email": "nachodev369@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "gitrepo": "https://github.com/na-cho-dev/hng-backend-track-projects"
}
```

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Git](https://git-scm.com/)

### Steps to Run Locally

1. **Clone the Repository**
   ```sh
   git clone https://github.com/na-cho-dev/hng-backend-track-projects.git
   cd hng-backend-track-projects/hng-backend-track-stage-0/
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Start the Server**
   ```sh
   npm run start
   ```
4. **Test the API**
   Open your browser or use Postman to visit:
   ```sh
   http://localhost:3300
   ```

## Deployment

The API is deployed and publicly accessible at:

```
https://hng-backend-track-stage-0-task.onrender.com/
```

## Link to Project Repository

[GitHub Repository]("https://github.com/na-cho-dev/hng-backend-track-projects)

## Relevant Backlink

For more details on **Node.js developers**, visit:
[https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)

---

**Author:** Fortune Iheanacho  
**HNG12 Slack Username:** @NachoDev
