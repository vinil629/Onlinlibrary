
import { useParams } from "react-router-dom"
import { books } from "../Booksdata"
import { Link } from "react-router-dom"


function Details() {
  const { id} = useParams();

  console.log(id)

  const viewbook = books.find((item) => item.id=== parseInt(id));



  console.log(viewbook)

  // Handle case when book not found
  if (!viewbook) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        Book not found.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-lg mb-5">
      <img
        src={viewbook.image}
        alt={viewbook.title}
        className="mx-auto rounded-md h-64 w-48 object-cover mb-4"
      />
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">
        {viewbook.title}
      </h1>
      <h2 className="text-lg text-center text-gray-700 mb-1">
        {viewbook.author}
      </h2>
      <p className="text-center text-sm text-gray-500 italic mb-1">
        {viewbook.genre}
      </p>
      <p className="text-center text-yellow-500 text-lg mb-2">
        ⭐ {viewbook.rating}
      </p>
      <p className="text-justify text-gray-700 mb-4">
        {viewbook.description}
      </p>
      <p className="text-center text-sm text-gray-600">
        Published: {viewbook.published}
      </p>

      {["Non-fiction", "Sci-fi", "Fiction", "Fantasy"].includes(viewbook.genre) && (
        <Link to={`/category/${viewbook.genre.toLowerCase().replace(/\s+/g, '')}`}>
          <button className="bg-sky-400 rounded text-white capitalize p-2 mt-5">
            Back to {viewbook.genre}
          </button>
        </Link>
      )}
    </div>
  );
}

export default Details;
