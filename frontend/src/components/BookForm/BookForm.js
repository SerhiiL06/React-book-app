import { useState } from "react"
import "./BookForm.css"
import { useDispatch } from "react-redux"
import { addBook } from "../../redux/books/actionCreators"
import data from "../../data/data.json"

import createBook from "../../utils/createBook";

const BookForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const dispatch = useDispatch()

    const bookHundler = (event) => {
        event.preventDefault()

        
        if (title && author) {
            dispatch(addBook(createBook({title, author})))
            setTitle('')
            setAuthor('')
        }
    }
   

    function addRandomBook() {
        const random = Math.floor(Math.random() * data.length)

        const bookObj = data[random]

        dispatch(addBook(createBook({title: bookObj.title, author: bookObj.author})))
    }

    return (

 
        <div className="app-block book-form">
            <h2>Book Form</h2>
            <form onSubmit={bookHundler}>
                <div>
                    <label htmlFor="title">Title: </label>
                     <input id="title" value={title} type="text" onChange={(el) => setTitle(el.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                     <input id="author" value={author} type='text' onChange={(el) => setAuthor(el.target.value)} />
                </div>

                
               
                
                <button type="submit">Add book</button>
                <br />
                
            </form>
                <button onClick={addRandomBook}>Add random book</button>
        </div>
    )
}


export default BookForm