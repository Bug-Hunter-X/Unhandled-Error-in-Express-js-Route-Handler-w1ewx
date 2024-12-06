# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers:  lack of error handling for invalid input.

The `bug.js` file shows an Express.js route that attempts to access a user from an object using the ID from the request parameter. If the ID is not found, this will throw an error.

The `bugSolution.js` file demonstrates how to handle potential errors with proper error handling and checks.