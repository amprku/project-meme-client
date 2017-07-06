import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import Login from '../../containers/LoginFacebook.container.js'
import { Button } from 'react-bootstrap';

const Wrapper = styled.div`
    box-sizing: border-box;
    min-width: 320px;
    max-width: 600px;
    margin: 0 auto;
    overflow: visibe;
    text-align: center;
    height:100px;
`

const FullScreen = styled.div`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height:100px;
    background: #fff;
    z-index: 1000;
    padding:0;
    margin:0;
`

const LoginContent = styled.div`
    maxWidth: 400px,
     
    margin: 'auto auto 10px'
`


class LoginScreen extends Component {
    state = {
        redirectToReferrer: false
    }
    render(){
        // const { from } = this.props.location.state || '/'
        // const { redirectToReferrer } = this.state
        return (
            <Wrapper>
                {/*{redirectToReferrer && (*/}
                    {/*<Redirect to={from || '/'}/>*/}
                {/*)}*/}
                {/*{from && (*/}
                    {/*<p>*/}
                        {/*You must log in to view the page at*/}
                        {/*<code>{from.pathname}</code>*/}
                    {/*</p>*/}
                {/*)}*/}
                <FullScreen>
                    <LoginContent className="well">
                        <Login/>
                        <Button bsSize="large" block>
                            <Link to="/dashboard">Enter Site</Link>
                        </Button>
                    </LoginContent>
                </FullScreen>
            </Wrapper>
        )
    }
}
export default LoginScreen;