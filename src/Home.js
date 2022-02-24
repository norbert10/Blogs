import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, seBlogs] = useState([
        { title: 'Good manners', body: 'Lorem ipsum dolor sit amet.....', author: 'Norbert', id: 1 },
        { title: 'IT Essentials', body: 'Lorem ipsum dolor sit amet.....', author: 'Guda', id: 2 },
        { title: 'Hacking Roadmap', body: 'Lorem ipsum dolor sit amet.....', author: 'Norbert', id: 3 }
    ])

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
    useEffect(()=>{
        console.log('Use Effect run')
        console.log(name)
    }, [name])


    //UseEffect without dependencies
    // useEffect(()=>{
    //     console.log('Use Effect run')
    //     console.log(name)
    // })
    return (
        <div>
            <BlogList blogs={blogs} title="All Blogs" deleteBlog = {deleteBlog}/>
            <p>{name}</p>
            <button onClick={()=>setName('Norbert')}>change name</button>
        </div>
    );
}

export default Home;