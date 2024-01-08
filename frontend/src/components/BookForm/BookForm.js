import { useState } from "react"
import "./BookForm.css"


const BookForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const addBook = (event) => {
        event.preventDefault()
        if (title && author) {
            //dispatch
            console.log(title, author)
            setTitle('')
            setAuthor('')
        }
    }

    return (

 
        <div className="app-block book-form">
            <h2>Book Form</h2>
            <form onSubmit={addBook}>
                <div>
                    <label htmlFor="title">Title: </label>
                     <input id="title" value={title} type="text" onChange={(el) => setTitle(el.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                     <input id="author" value={author} type='text' onChange={(el) => setAuthor(el.target.value)} />
                </div>
               
                
                <button type="submit">Add book</button>
            </form>
        </div>
    )
}


export default BookForm