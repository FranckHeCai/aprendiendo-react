import { Link } from "../Link.jsx"

export function Page404 (){
    return(
        <>
            <h1>404</h1>
            <p>Page not found...</p>
            <Link to="/"> Go back to home </Link>
        </>
    )
}