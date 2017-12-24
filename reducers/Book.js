import { BOOK_LIST,DELETE_BOOK  } from '../actions/index'
let response={};

const Book = (state = [], action) => {
    switch (action.type) {
        case BOOK_LIST:

            return action.payload;
            //response.bookList = action.payload;
            //return response;
            break;

        case DELETE_BOOK:
            response.deleteBook = action.payload;
            return response;
            break;

        default:
            return state
    }
}

export default Book;