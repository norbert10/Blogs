import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Norbert')
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
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
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value='norbert'>Norbert</option>
                    <option value='guda'>Guda</option>
                    <option value='dommy'>Dommy</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
    );
}

export default Create;