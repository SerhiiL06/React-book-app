import { v4 as uuidv4 } from 'uuid';

const createBook = ({ title, author, method }) => {
    return  { title, author,  bookId: uuidv4(), isFavorite: false, method: method }
}


export default createBook