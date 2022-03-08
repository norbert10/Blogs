import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, err, isLoading} = useFetch('http://localhost:8000/blogs/' + id)
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {err && <div>{err}</div>}
            {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
                <div>{blog.body}</div>
            </article>
            )}
            {/* <h2>Blog details - {id}</h2> */}
        </div>
     );
}
 
export default BlogDetails;