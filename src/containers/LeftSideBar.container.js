import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { getUserInformation } from '../actions/actions.js'
import SideNav from '../components/navs/left/react_sidenav.js';
import GameItem from '../components/navs/left/gameInNav.js';


const NavShape = styled.div`
    height:100% !important;
`


class NavContainer extends Component {
    componentDidMount() {
        //now has access to data like this.props.something, which is from store
        //now has access to dispatch actions like this.props.getSomething
    }
    render() {
        return (
            <NavShape>
                    <SideNav/>
            </NavShape>
        );
    }
}


export default NavContainer;
