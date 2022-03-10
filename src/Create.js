import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Norbert')
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const blog = { title, body, author }
        console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'content-Type': 'Application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Blog added successfully')
            setIsLoading(false)
            //to redirect to home page
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <label>Blog body: </label>
                <textarea
                    required
                    rows='5'
                    cols='50'
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                ></textarea>
                <label> Blog author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='norbert'>Norbert</option>
                    <option value='guda'>Guda</option>
                    <option value='dommy'>Dommy</option>
                </select>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;