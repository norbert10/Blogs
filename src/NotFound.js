import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>The page cannot be found</p>
            <Link to='/'>Back home</Link>
        </div>
     );
}
 
export default NotFound;