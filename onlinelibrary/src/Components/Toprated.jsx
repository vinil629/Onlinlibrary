import { books } from "../Booksdata"

function Toprated(){

    const filteredbooks=books.filter((item)=>item.rating>4.2)
    console.log(filteredbooks)


    return(
        <>

        <div className="mt-10 text-center mb-6">
            
        

        <h1 className="text-2xl capitalize font-sans mb-5">Top rated</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
        {filteredbooks.map((book) => (

            
            <div key={book.id} className="border p-4 rounded-lg shadow-md w-full ">


            <img src={book.image} height={90} width={90} className="mx-auto rounded-md h-50 w-90 " alt="book.title"/>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <p>⭐{book.rating}</p>
          
            </div>
         


            
 
  
))}

        </div>


        </div>

        </>
    )
}

export default Toprated