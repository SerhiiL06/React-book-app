import { useSelector } from "react-redux"
import "./BookList.css"

const BookList = () => {
    const state = useSelector((state) => state.books)

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {state.length === 0 ? <p>Not books yet</p> : (
                <ul>
                    {state.map((el, i) => {
                        return <li key={i}>
                            <div className="book-info">{el.title} by {el.author}</div>
                        </li>
                    })}
                </ul>
            )}
        </div>
    )
}


export default BookList