import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, seBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('Nobby')
    const [err, setErr] = useState(null)


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
            if(!res.ok){
                throw Error('Cannot Fetch the data. Please try again')
            }
            return res.json();
        })
        .then(data=>{
            seBlogs(data)
            setIsLoading(false)
            setErr(null)
        })
        .catch(err =>{
            // console.log(err.message)
            setErr(err.message)
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
            {err && <div>{err}</div>}
            {isLoading && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;