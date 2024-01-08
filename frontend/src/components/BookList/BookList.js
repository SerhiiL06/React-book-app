import { useSelector, useDispatch } from "react-redux"
import { deleteBook, toogleBook } from "../../redux/books/actionCreators"
import { BsBookmarkPlus, BsBookmarkPlusFill } from "react-icons/bs";


import "./BookList.css"



const BookList = () => {
    const state = useSelector((state) => state.books)

    const dispatch = useDispatch()


    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {state.length === 0 ? <p>Not books yet</p> : (
                <ul>
                    {state.map((el, i) => {
                        return <li key={i}>
                            <div className="book-info">{el.title} by {el.author}</div>
                            <button className="book-actions" onClick={() => dispatch(toogleBook(el.bookId))}>{el.isFavorite ? <BsBookmarkPlusFill/> :<BsBookmarkPlus />}</button>
                            <button className="book-actions" onClick={() => dispatch(deleteBook(el.bookId))}>Delete me!</button>
                        </li>
                    })}
                </ul>
            )}
        </div>
    )
}


export default BookList