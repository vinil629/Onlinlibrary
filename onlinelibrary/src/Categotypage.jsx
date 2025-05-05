import { useParams } from "react-router-dom";
import { books } from "./Booksdata";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";


const CategoryPage = () => {


    const { categoryName } = useParams();
  
  
    // Filter books by category name (case-insensitive match)
    const filteredBooks = books.filter(
      (book) => book.genre.toLowerCase() === categoryName.toLowerCase()
    );
  
    return (
      <div style={{ padding: "20px" }}>
        <h2 className="text-center text-2xl text-red-400 capitalize mb-5" >  {categoryName}</h2>
  
        {filteredBooks.length === 0 ? (
          <p>No books found in this category.</p>
        ) : (
          <ul className="flex flex-wrap gap-6 justify-center">
            {filteredBooks.map((item) => (
                <div key={item.id} className="w-64 bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">



              <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-full object-cover rounded-md mb-4"
                      />
                      <h1 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h1>
                      <h2 className="text-sm text-gray-600 mb-1">{item.author}</h2>
                      <p className="text-yellow-500 text-sm mb-3">⭐ {item.rating}</p>
      
                      <Link to={`details/${item.id}`}>
                        <button className="bg-sky-500 hover:bg-sky-600 px-4 py-2 text-white rounded-lg trangenresition-colors duration-200">
                          View Book
                        </button>
                      </Link>
                    
              

                </div>
             
            ))}
          </ul>

         



        )}
        
   

       
       
      </div>
      
    );
  };
  
  export default CategoryPage;