import { useSelector, useDispatch } from "react-redux"
import { BsBookmarkPlus, BsBookmarkPlusFill } from "react-icons/bs";
import { selectTitleFilter, selectAuthorFilter, selectFavorite } from "../../redux/slices/filterSlices";
import { bookmarkAction, deleteBook } from "../../redux/slices/bookSlices";

import "./BookList.css"



const BookList = () => {
    let state = useSelector((state) => state.books)

    const filterData = useSelector(selectTitleFilter)

    const authorFilterData = useSelector(selectAuthorFilter)

    const favoriteFilterData = useSelector(selectFavorite)

    const dispatch = useDispatch()



    if (filterData.length > 0) {
        state = state.books.filter((el) => el.title.toLowerCase().includes(filterData.toLowerCase()))
    }

    if (authorFilterData.length > 0) {
        state = state.books.filter((el) => el.author.toLowerCase().includes(authorFilterData.toLowerCase()))
    }

    if (favoriteFilterData) {
        state = state.books.filter((el) => el.isFavorite === favoriteFilterData)
    }


    const highlightMath = (text, filter) => {
        if (!filter) return text


        return text.split(new RegExp(`(${filter})`, 'gi')).map((parthsring, i) => {
            if (parthsring.toLowerCase() === filter.toLowerCase()) {
                return <span key={i} className="highlight">{parthsring}</span>
            }

            return parthsring
        })
    }

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {state.length === 0 ? <p>Not books yet</p> : (
                <ul>
                    {state.books.map((el, i) => {
                        return <li key={i}>
                            <div className="book-info">
                                {highlightMath(el.title, filterData)}

                                <em> by </em>

                                <strong> {highlightMath(el.author, authorFilterData)} </strong>

                                ({el.method})
                            </div>
                            <button className="book-actions" onClick={() => dispatch(bookmarkAction(el.bookId))}>{el.isFavorite ? <BsBookmarkPlusFill/> :<BsBookmarkPlus />}</button>
                            <button className="book-actions" onClick={() => dispatch(deleteBook(el.bookId))}>Delete me!</button>
                        </li>
                    })}
                </ul>
            )}
        </div>
    )
}


export default BookList