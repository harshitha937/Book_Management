# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This project is a simple full-stack web application that manages a list of books using a Node.js + Express.js backend API and a React.js frontend. It allows users to perform CRUD operations (Create, Read, Update, Delete) on book records consisting of a title and author.

The book data is stored in memory (not persisted in a database).

It includes the following routes:

✓GET /books – Fetch all books.

✓POST /books – Add a new book.

✓PUT /books/:id – Update an existing book.

✓DELETE /books/:id – Remove a book.

A simple UI allows users to:

~View the list of books
~Add a new book
~Edit a book’s details
~Delete a book
Axios is used to interact with the REST API.

The UI is dynamically updated based on the API responses.


Data Flow....

1. On page load, the app fetches all books from the API.
2. Users can submit a form to add or update books.
3. Changes are immediately reflected in the frontend UI.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
