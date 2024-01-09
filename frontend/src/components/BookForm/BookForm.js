import { useState } from "react"
import { useDispatch } from "react-redux"
import { addBook, thunkFunction } from "../../redux/slices/bookSlices"
import data from "../../data/data.json"
import "./BookForm.css"
import createBook from "../../utils/createBook";

const BookForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const dispatch = useDispatch()

    const bookHandle = (event) => {
        event.preventDefault()

        if (title && author) {
            dispatch(addBook(createBook({title, author,  method: 'manualy'})))
        }
        setTitle('')
        setAuthor('')

    }
   

  

    const bookHundleViaAPi =  () => {
        dispatch(thunkFunction)
      
       
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
            
            <button type="button" onClick={bookHundleViaAPi}>Add book VIA API</button>
        </div>
    )
}


export default BookForm