import React, { useEffect, useState } from "react";
import axios from "axios";

function Book() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", id: null });

  const API_URL = "http://localhost:3000/books";

  const fetchBooks = async () => {
    const res = await axios.get(API_URL);
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id === null) {
      await axios.post(API_URL, { title: form.title, author: form.author });
    } else {
      await axios.put(`${API_URL}/${form.id}`, {
        title: form.title,
        author: form.author,
      });
    }
    setForm({ title: "", author: "", id: null });
    fetchBooks();
  };

  const handleEdit = (book) => {
    setForm(book);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchBooks();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6"> Book Manager</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <input
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          name="author"
          placeholder="Author Name"
          value={form.author}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {form.id === null ? "Add Book" : "Update Book"}
        </button>
      </form>

      <ul className="mt-8 w-full max-w-md">
        {books.map((book) => (
          <li
            key={book.id}
            className="bg-white p-4 rounded shadow-md mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{book.title}</h2>
              <p className="text-gray-600 text-sm">by {book.author}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(book)}
                className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(book.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;