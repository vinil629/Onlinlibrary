
import { books } from "../Booksdata"
import { Link } from "react-router-dom"
import Search from "./Search"
import { useState } from "react"

function Nonfiction(){

    const nonfiction=books.filter((item)=>item.genre==="Non-fiction")


    const [nonbook,setnonbook]=useState(nonfiction)
    const [search,setsearch]=useState("")

    function updatesearchtext(text){
      setsearch(text)

    const searchedbook=nonbook.filter((item)=>{
      return item.title.toLowerCase().includes(text.toLowerCase())
    })


      setnonbook(searchedbook)

        
      
    }





    



    console.log(nonfiction)
    return(
        <>

        <Search filter={updatesearchtext}/>

        {nonbook.length>0 ? (
          <>

<div className="flex flex-wrap gap-6 justify-center mt-8">
  {nonbook.map((item) => (
    <div
      key={item.id}
      className="w-64 bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover rounded-md mb-4"
      />
      <h1 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h1>
      <h2 className="text-sm text-gray-600 mb-1">{item.author}</h2>
      <p className="text-yellow-500 text-sm mb-3">⭐ {item.rating}</p>

      <Link to={`/details/${item.id}`}>
        <button className="bg-sky-500 hover:bg-sky-600 px-4 py-2 text-white rounded-lg transition-colors duration-200">
          View Book
        </button>
      </Link>
    </div>
  ))}
</div>


          </>
        ):(
          <div className="text-center mt-10">
          <h1 className="text-xl text-red-600 font-semibold">
            ❗ No fiction books found.
          </h1>

          <Link to="/">

          <button> back to home</button>
         </Link>
         
        </div>
      
        )}
       

       
        
        
        </>
    )
}


export default Nonfiction