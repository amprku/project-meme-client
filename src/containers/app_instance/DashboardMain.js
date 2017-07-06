import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';


class MainView extends Component {
    render(){
        return (
            <div>
                <Col xs={12} md={8}>
                            <h1>ViewTitle</h1>

                            View Main Content Here
                            extras


                            extras


                            extras

                </Col>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userInformation: state.userInformation,
        authenticated:state.getFBLoginStatus
    }
}


export default connect(mapStateToProps)(MainView)