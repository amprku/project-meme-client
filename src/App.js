import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
//containers
import LoginScreen from './components/login/loginFullScreen.js'
import MainAppContents from './containers/App.container.js'

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LoginScreen}/>
                    <Route path="/dashboard" component={MainAppContents}/>
                </Switch>
            </div>
        );
  }
}



export default App


