import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers/index"
import { Provider } from 'react-redux'

const store= createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

class InitRouter extends React.Component{
    render(){
        return(
            <Router>
                <App/>
            </Router>
        )
    }
}

ReactDOM.render(<Provider store={store}>
                    <InitRouter/>
                </Provider>
    , document.getElementById('root'));
registerServiceWorker();
