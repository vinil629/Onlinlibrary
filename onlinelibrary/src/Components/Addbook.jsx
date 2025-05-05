import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './booksSlice';
import { useNavigate } from 'react-router-dom';

function Addbook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !image || !genre || !rating) {
      setError('All fields are required');
      return;
    }

    const newBook = {
      id: Date.now(), // unique ID
      title,
      author,
      image,
      genre,
      rating,
    };

    dispatch(addBook(newBook));
    navigate('/browse');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="border p-2 w-full" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Rating (e.g. 4.5)" value={rating} onChange={(e) => setRating(e.target.value)} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Book</button>
      </form>
    </div>
  );
}

export default Addbook;
