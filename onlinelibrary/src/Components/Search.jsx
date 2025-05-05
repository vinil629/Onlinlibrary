import { useState } from "react"

function Search({onSearch}){

 

   

   
    return(
        <div className="mb-6">
                    <input type="text" placeholder="search by title"  className="border border-black w-200 ml-60 p-4" onChange={(e)=>onSearch(e.target.value)}/>
                   
        </div>
    )
}


export default Search