import { useState } from "react"
import "./BookForm.css"
import { useDispatch } from "react-redux"
import { addBook } from "../../redux/books/actionCreators"

const BookForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const dispatch = useDispatch()

    const bookHundler = (event) => {
        event.preventDefault()

        
        if (title && author) {
            const book = {title, author}
            dispatch(addBook(book))
            setTitle('')
            setAuthor('')
        }
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
            </form>
        </div>
    )
}


export default BookForm