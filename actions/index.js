export const BOOK_LIST = 'BOOK_LIST'
export const ADD_BOOK = 'ADD_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const UPDATE_BOOK = 'DELETE_BOOK'

import axios from 'axios';

export const getAllBooks = () => {
    const request = axios.get("http://localhost:3002/api/getBookList");
    return {
        type: BOOK_LIST,
        payload: request
    }
}
export const addnewbook = (books) => {
    const request = axios.post("http://localhost:3002/api/getBookList",books);
    return {
        type: ADD_BOOK,
        payload: request
    }
}


export const deleteBook = (bookId) => {
    const request = axios.delete("http://localhost:3002/api/getBookList/"+bookId);
    return {
        type: DELETE_BOOK,
        payload: request
    }
}

export const updateBook = (bookDetails) => {

    let url = 'http://localhost:3002/api/getBookList/'+bookDetails.id+'/replace';

    const request = axios.post(url, bookDetails);
    return {
        type: UPDATE_BOOK,
        payload: request
    }
}