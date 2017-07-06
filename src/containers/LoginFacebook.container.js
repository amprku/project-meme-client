import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FacebookReduxLogin from 'facebook-login-redux-react';
import { getLoginStatus, startFetching, getUserInformation, toggleAuth } from '../actions/actions.js';

import WellBoy from '../fuckaround/Well.js'
import ListItem from '../fuckaround/listItem.js'


class LoginFull extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.getUserInformation = this.getUserInformation.bind(this);
        this.styles = {};
    }

    login(response) {
        this.props.getLoginStatus(response.status);
        window.FB.api('/me', 'GET', { fields: 'id,name,email,picture,location,locale' },
            userInformation => {
                this.props.getUserInformation(userInformation);
            }
        );

        this.props.toggleAuth()

    }
    logout(response) {
        this.props.getLoginStatus(response.status);
        this.props.getUserInformation(null);
    }
    getUserInformation() {
        if (this.props.facebookLogin.isConnected && !this.props.userInformation) {
            console.log('here')
            window.FB.api('/me', 'GET', { fields: 'id,name,email' },
                userInformation => {
                    this.props.getUserInformation(userInformation);
                }
            );

        }
    }
    render() {
        console.log(this)
        const { id, name, email } = this.props.userInformation || { id: null, name: null, email: null };
        return (
            <div>
                    <FacebookReduxLogin
                        appId='469376143398401'
                        verbose={false}
                        loginLabel="Login With Facebook"
                        logoutLabel="Logout"
                        onWillMount={this.login}
                        onLoginEvent={this.login}
                        onLogoutEvent={this.logout}
                        onClick={() => this.props.startFetching()}
                    />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getLoginStatus,
        startFetching,
        getUserInformation,
        toggleAuth
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        userInformation: state.userInformation,
        facebookLogin: state.facebookLogin,
        loginStatus: state.loginStatus
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFull);

