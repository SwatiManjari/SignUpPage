# SignUpPage

A responsive signup form built using HTML, CSS, JavaScript, and Node.js with Express.

The project validates username and password requirements on the frontend and sends valid signup data to an Express backend.

## Features

- Username validation
  - At least 8 characters
  - Starts with a letter
  - Allows letters, numbers, and underscores
  - Does not allow spaces or special characters
- Password validation
  - At least 8 characters
  - At least one uppercase letter
  - At least one number
  - At least one special character
- Real-time validation feedback
- Express backend
- `POST /signup` route
- JSON request handling
- In-memory user storage

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap
- Node.js
- Express.js

## How to Run

Clone the repository and open the project folder:

```bash
git clone https://github.com/SwatiManjari/SignUpPage.git
cd SignUpPage
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Or using Nodemon:

```bash
nodemon server.js
```

Then open:

```text
http://localhost:3000
```

## Project Structure

```text
SignUpPage/
├── index.html
├── index.js
├── style.css
├── login.png
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Note

User data is currently stored in memory for learning purposes and will be lost when the server restarts.