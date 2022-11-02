import React, { useContext, useEffect } from 'react';
import {connect} from 'react-redux';
import classes from "./styles.module.scss";
import BooksContext from '../context';
import {fetchBooks} from "../../redux";
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { addBookToCart } from '../../redux';
import { bookRemoveFromCart } from '../../redux';


const Booklist = ({books, addBookToCart, bookRemoveFromCart}) => {
  
  return (
    <ul className={classes.book_list}>

      {books.map((book) => {
          return <li key = {`books-${book.id}`}> 
          <BookListItem book={book} addBookToCart={addBookToCart} bookRemoveFromCart={bookRemoveFromCart}/> </li>
      })}
    </ul>
  )
};

const BookListContainer = ({books, loading, error, fetchBooks, addBookToCart, bookRemoveFromCart}) => {
  const service = useContext(BooksContext);

  useEffect(() => {
    fetchBooks(service.getBooks)
  }, []);

  if(loading) {
    return <Spinner/>
  }

  if (error) {
    return <ErrorIndicator/>
  }

  return <Booklist books={books} addBookToCart={addBookToCart} bookRemoveFromCart={bookRemoveFromCart}/>
};

const mapStateToProps = ({books, error, loading}) => {
    return {
        books,
        error, 
        loading
    };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchBooks: (service) => fetchBooks(dispatch, service),
    addBookToCart: (bookid) => dispatch(addBookToCart(bookid)),
    bookRemoveFromCart: (dbookid) => dispatch(bookRemoveFromCart(dbookid)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps) (BookListContainer);