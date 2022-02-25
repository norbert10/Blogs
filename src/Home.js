import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, seBlogs] = useState(null)

    const [name, setName] = useState('Nobby')


    // const handleClick = ()=>{
    //     seName('Gudah')
    //     setAge(30)
    // }

    //function to delete an item using filter method
    const deleteBlog = (id) =>{
        const newBlogs = blogs.filter((blog)=>blog.id !==id);
        seBlogs(newBlogs)
    }

    //useEffect with dependencies. 
    //N.B=Use effect is a function that runs after every render of a page

    //Fetching json data using useEffect
    useEffect(()=>{
       fetch('http://localhost:8000/blogs')
       .then(res=>{
           return res.json();
       })
       .then(data=>{
           console.log(data);
           seBlogs(data)
       })
    }, [])


    //UseEffect without dependencies
    // useEffect(()=>{
    //     console.log('Use Effect run')
    //     console.log(name)
    // })
    return (
        <div>
            {/* conditional output */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" deleteBlog = {deleteBlog}/>}
            <p>{name}</p>
            <button onClick={()=>setName('Norbert')}>change name</button>
        </div>
    );
}

export default Home;