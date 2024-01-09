import { useState } from "react"
import axios from 'axios'
import "./BookForm.css"
import { useDispatch } from "react-redux"
import { addBook } from "../../redux/slices/bookSlices"
import data from "../../data/data.json"

import createBook from "../../utils/createBook";

const BookForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const dispatch = useDispatch()

    const bookHandle = () => {


        if (title && author) {
            dispatch(addBook({title, author}))
        }

    }
   

    const bookHundleViaAPi = async () => {

        try {
             const {title, author} = await (await axios.get("http://localhost:4000/random-book")).data

            dispatch(addBook({title, author}))
        } catch (error) {
            console.log("Something went wrong", error)
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
            <form onSubmit={bookHandle}>
                <div>
                    <label htmlFor="title" >Title: </label>
                     <input id="title" value={title} type="text" onChange={(el) => setTitle(el.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                     <input id="author" value={author} type='text' onChange={(el) => setAuthor(el.target.value)} />
                </div>

                
               
                
                <button type="submit">Add book</button>
                <br />
                
            </form>
            <button type="button" onClick={addRandomBook}>Add random book</button>
            
            <button type="button" onClick={bookHundleViaAPi}>Add book VIA API</button>
        </div>
    )
}


export default BookForm