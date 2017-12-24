import { connect } from 'react-redux'
import Addbook from '../components/Addbook'
import { bindActionCreators } from 'redux';
import { addnewbook , updateBook} from '../actions/index'

const mapStateToProps = (state, ownProps) => {

    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addnewbook ,updateBook}, dispatch);

}

const AddBookContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Addbook)

export default AddBookContainer
