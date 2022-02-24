import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, seBlogs] = useState([
        { title: 'Good manners', body: 'Lorem ipsum dolor sit amet.....', author: 'Norbert', id: 1 },
        { title: 'IT Essentials', body: 'Lorem ipsum dolor sit amet.....', author: 'Guda', id: 2 },
        { title: 'Hacking Roadmap', body: 'Lorem ipsum dolor sit amet.....', author: 'Norbert', id: 3 }
    ])


    // const handleClick = ()=>{
    //     seName('Gudah')
    //     setAge(30)
    // }

    //function to delete an item using filter method
    const deleteBlog = (id) =>{
        console.log("deleted");
        const newBlogs = blogs.filter((blog)=>blog.id !==id);
        seBlogs(newBlogs)
    }

    return (
        <div>
            <BlogList blogs={blogs} title="All Blogs" deleteBlog = {deleteBlog}/>
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Norbert')} title="Norbert's Blogs"/> */}
        </div>
    );
}

export default Home;