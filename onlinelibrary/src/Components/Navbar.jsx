import { Link } from "react-router-dom"


function Navbar(){
    return(
        <>
        <div className="">
            <div className="bg-amber-500 p-4 text-center text-2xl">
            <h2>onlinelibrary</h2>

            </div>
            <div className="flex justify-center p-5">
                <ul className="flex flex-row gap-5 capitalize">
                    <Link to="/">home</Link>
                   <Link to="browse">Browse</Link>
                   <Link to="/add">Add book</Link>
                  
                   
                </ul>
            </div>
           
        </div>
        </>
    )
}


export default Navbar