import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const { data:blogs, isLoading, err } = useFetch('http://localhost:8000/blogs');


    // const handleClick = ()=>{
    //     seName('Gudah')
    //     setAge(30)
    // }
  

    //useEffect with dependencies. 
    //N.B=Use effect is a function that runs after every render of a page

    //Fetching json data using useEffect
    

    //UseEffect without dependencies
    // useEffect(()=>{
    //     console.log('Use Effect run')
    //     console.log(name)
    // })
    return (
        <div>
            {/* conditional output */}
            {err && <div>{err}</div>}
            {isLoading && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;