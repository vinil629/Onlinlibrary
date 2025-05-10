import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './Search';
import { useState } from 'react';

function Browse() {
  const books = useSelector((state) => state.books);
  
  console.log(books)
 

  const [query, setQuery] = useState('');

  // Case-insensitive filtering by title
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  console.log(filteredBooks)




  return (
    <>
      <Search onSearch={setQuery}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredBooks.map((item) => (
          <div key={item.id} className="w-64 border p-4 rounded shadow-md text-center">
            <img src={item.image} alt={item.title} className="h-40 w-40 sm:h-48 sm:w-48 object-cover rounded-md mb-4" />
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

 









  


 
  