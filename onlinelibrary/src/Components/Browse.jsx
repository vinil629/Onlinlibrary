import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './Search';
import { useState } from 'react';

function Browse() {
  const books = useSelector((state) => state.books);

  const [query, setQuery] = useState('');

  // Case-insensitive filtering by title
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  console.log(filteredBooks)




  return (
    <>
      <Search onSearch={setQuery}/>
      <div className="flex flex-wrap gap-10 justify-center">
        {filteredBooks.map((item) => (
          <div key={item.id} className="w-64 border p-4 rounded shadow-md text-center">
            <img src={item.image} alt={item.title} className="h-48 w-full object-cover mb-3 rounded" />
            <h1>{item.title}</h1>
            <h2 className="text-sm text-gray-600">{item.author}</h2>
            <Link to={`/browse/${item.id}`}>
              <button className="bg-sky-500 text-white mt-2 px-4 py-1 rounded hover:bg-sky-600">
                View Book
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Browse;

 









  


 
  