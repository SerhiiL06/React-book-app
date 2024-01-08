import * as a from "./actionTypes"


const initialState = []


const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case a.ADD_BOOK:
            return [...state, action.payload]   
        
        case a.DELETE_BOOK:
            return state.filter((el) => el.bookId !== action.payload)
        
        case a.TOOGLE_BOOK:
            return state.map((el) => {
                { return el.bookId === action.payload ? { ...el, isFavorite: !el.isFavorite } : el }
            })
           
        default:
            return state
    }
}

export default booksReducer