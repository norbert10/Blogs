import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, seBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('Nobby')


    // const handleClick = ()=>{
    //     seName('Gudah')
    //     setAge(30)
    // }
  

    //useEffect with dependencies. 
    //N.B=Use effect is a function that runs after every render of a page

    //Fetching json data using useEffect
    useEffect(()=>{
       setTimeout(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            seBlogs(data)
            setIsLoading(false)
        })
       }, 1000)
    }, [])


    //UseEffect without dependencies
    // useEffect(()=>{
    //     console.log('Use Effect run')
    //     console.log(name)
    // })
    return (
        <div>
            {/* conditional output */}
            {isLoading && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;