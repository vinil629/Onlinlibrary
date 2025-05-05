import { books } from "../Booksdata"
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

function Fantasy(){

    const fantasybooks=books.filter((item)=>item.genre=="Fantasy");


    const [fantasy,setfantasy]=useState(fantasybooks)
    const[search,setsearched]=useState("")

    function updatesearchtext(text){
      
      setsearched(text)
  
  
      const searchedScifi = fantasybooks.filter((book) =>{

        console.log("book",book)
       return    book.title.toLowerCase().includes(text.toLowerCase())
      }
      );
  
  
  
     console.log(searchedScifi,"searchedbooks")


     setfantasy(searchedScifi)


     


    }


    

    console.log(fantasybooks)
    return(
        <>
        

        <Search filter={updatesearchtext}/>

        {fantasy.length>0?(
          <>

<h1 className="text-center text-2xl text-red-500 capitalize font-sans mb-5" >fantasy</h1>

<div className="flex flex-wrap gap-6 justify-center">

{fantasy.map((item)=>(
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
export default Fantasy