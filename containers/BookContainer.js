import { connect } from 'react-redux'
import Book from '../components/Book'
import { bindActionCreators } from 'redux';
import { getAllBooks,deleteBook } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
      getAllBooksList: state.Book,
  }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getAllBooks,deleteBook }, dispatch);
}

const BookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)

export default BookContainer
