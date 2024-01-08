import { v4 as uuidv4 } from 'uuid';

const createBook = ({title, author}) => {
    return  { title, author, bookId: uuidv4(), isFavorite: false }
}


export default createBook