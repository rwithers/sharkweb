import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

export default function SharkHeader(props) {
    return (

        <div> 
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/repos" component={Repos}/>
                    <Route path="/about" component={About}/>
                </Route>
            </Router>
        </div>

    );
}