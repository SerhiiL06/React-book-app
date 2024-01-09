import { v4 as uuidv4 } from 'uuid';

const createBook = ({ title, author, method }) => {
    return  { title, author, method, bookId: uuidv4(), isFavorite: false }
}


export default createBook