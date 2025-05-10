import { Link } from "react-router-dom"

function Categories(){
    return(
        <>

      
        <div className="mt-10">
            <div className="text-2xl text-center">
                <h1>categories</h1>
            </div>

            <div className="text-center mt-5">
            <ul className="flex  flex-col gap-8 justify-center sm:flex-col md:flex-col lg:flex-row">
            <Link to="/category/Fiction" className="hover:underline">Fiction</Link>
<Link to="/category/Sci-fi" className="hover:underline">Sci-fi</Link>
<Link to="/category/Fantasy" className="hover:underline">Fantasy</Link>
<Link to="/category/Non-fiction" className="hover:underline"> Non-fiction</Link>
</ul>


            </div>
          
          
        </div>
        </>
    )
}


export default Categories