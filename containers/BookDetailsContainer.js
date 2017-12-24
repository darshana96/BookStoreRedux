import { connect } from 'react-redux'
import { HELLO_WORLD } from './../actions'
import BookDetails from '../components/BookDetails'
import { bindActionCreators } from 'redux';
import { helloWorld } from './../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
}

const BookDetailsContainer= connect(
    mapStateToProps,
    mapDispatchToProps
)(BookDetails)

export default BookDetailsContainer
