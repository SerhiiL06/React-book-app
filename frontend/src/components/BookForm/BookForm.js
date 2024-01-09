import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaSpinner } from "react-icons/fa";
import { addBook, fetchBook } from "../../redux/slices/bookSlices"
import { setError } from "../../redux/slices/errorSlice"
import { selectIsLoading } from "../../redux/slices/bookSlices";
import data from "../../data/data.json"
import "./BookForm.css"
import createBook from "../../utils/createBook";

const BookForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    

    const dispatch = useDispatch()

    const selectLoading = useSelector(selectIsLoading)

    const bookHandle = (event) => {
        event.preventDefault()

        if (title && author) {
            dispatch(addBook(createBook({ title, author, method: 'manualy' })))
            setTitle('')
            setAuthor('')
        } else {
            dispatch(setError('Title and author is required fields'))
        }
       

        

    }
   

    const bookHundleViaAPi =  () => {
       
         dispatch(fetchBook("http://localhost:4000/random-book-delayed"))
}

    function addRandomBook() {
        const random = Math.floor(Math.random() * data.length)

        const bookObj = data[random]

        dispatch(addBook(createBook({title: bookObj.title, author: bookObj.author, method: 'random'})))
    }

    return (

 
        <div className="app-block book-form">
            <h2>Book Form</h2>
            <form onSubmit={bookHandle}>
                <div>
                    <label htmlFor="title" >Title: </label>
                     <input name="title" value={title} type="text" onChange={(el) => setTitle(el.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                     <input name="author" value={author} type='text' onChange={(el) => setAuthor(el.target.value)} />
                </div>

                
               
                
                <button type="submit">Add book</button>
        
                
            </form>
            <button type="button" onClick={addRandomBook}>Add random book</button>
            {selectLoading ? <FaSpinner className="spinner"/> : <button type="button" onClick={bookHundleViaAPi}>Add book VIA API</button>}
           
        </div>
    )
}


export default BookForm