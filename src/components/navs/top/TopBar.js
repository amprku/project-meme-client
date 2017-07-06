import React, { Component } from 'react';
import styled from 'styled-components';
import {Navbar} from 'react-bootstrap'
import { Flex, Box } from 'grid-styled'
import Items from './TopNavItems.js'

class TopBar extends Component {
    render(){
        return (
                <Navbar  inverse staticTop fluid style={{margin:0, height:50}}>
                    <Items />
                </Navbar>
        )
    }
}
export default TopBar;