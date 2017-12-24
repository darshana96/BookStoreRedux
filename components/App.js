import React from 'react'
import BookContainer from '../containers/BookContainer'
import AddBookContainer from '../containers/AddBookContainer';
import BookDetailsContainer from '../containers/BookDetailsContainer';
import UserDetails from './BookDetails';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route ,browserHistory} from 'react-router'
import ReactDOM from 'react-dom';


class App extends React.Component {

    render() {
        return(
                <Router history={browserHistory}>
                    <div>
                        <Switch>
                            <Route path="/add"   component={() => (<AddBookContainer update="false" />)} />
                            <Route path="/update"  component={() => (<AddBookContainer update="true" />)} />
                            <Route path="/details" component={ BookDetailsContainer }/>
                            <Route path="/" component={ BookContainer } />

                        </Switch>
                    </div>
                </Router>
        );
    }
};


export default App