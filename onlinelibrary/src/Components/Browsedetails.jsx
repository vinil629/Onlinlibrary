import { useParams } from "react-router-dom"
import { books } from "../Booksdata"
import { Link } from "react-router-dom"

function Browsedetails(){

    const {id}=useParams()
    console.log(id)

    const browsebook=books.find((item)=>{
        return item.id===parseInt(id)
    })

    return(
    <>
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-lg">
          <img
            src={browsebook.image}
            alt={browsebook.title}
            className="mx-auto rounded-md h-64 w-48 object-cover mb-4"
          />
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">{browsebook.title}</h1>
          <h2 className="text-lg text-center text-gray-700 mb-1">{browsebook.author}</h2>
          <p className="text-center text-sm text-gray-500 italic mb-1">{browsebook.genre}</p>
          <p className="text-center text-yellow-500 text-lg mb-2">⭐ {browsebook.rating}</p>
          <p className="text-justify text-gray-700 mb-4">{browsebook.description}</p>
          <p className="text-center text-sm text-gray-600">Published: {browsebook.published}</p>

        <Link to="/browse"><button className="capitalize bg-sky-200  p-2 rounded hover:bg-sky-500 transition-colors duration-200">back to browse</button></Link>

  




         

         
        </div>
      </>
    
    
    )
}


export default Browsedetails