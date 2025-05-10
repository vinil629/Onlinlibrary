import { useRouteError } from "react-router-dom"

function Error(){

    const err=useRouteError()
    console.log(err)
    return(
        <>

        <h1>error found</h1>
        <p>{err.status}</p>
        <p>{err.data}</p>


        </>
    )
}


export default Error