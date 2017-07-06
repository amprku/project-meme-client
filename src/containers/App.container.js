import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import SideNav from '../containers/LeftSideBar.container.js';
import propTypes from 'prop-types';
import styled from 'styled-components';

//containers
import ContentMain from  './app_instance/DashboardMain.js'
import TopBar from '../components/navs/top/TopBar.js'
import SideNavContainer from '../containers/LeftSideBar.container.js'
import Footer from '../components/footer/footer.js'

const NavAbsContainer = styled.div`
    position:fixed;
    top: 50px;
    right:0;
    bottom:0;
    z-index:1001;
    height:100%;
    width:240;
`

const ViewContainer = styled.div`
    box-sizing: border-box;
    padding: 0 240px;

`



// React component
class MainAppContents extends Component {
    toggleNavWidth(){
        console.log('hi');
    }
    render() {
        return (
            <div>
                <NavAbsContainer>
                    <SideNavContainer/>
                </NavAbsContainer>
                <TopBar/>
                <ViewContainer>
                        <ContentMain/>
                        <Footer/>
                </ViewContainer>

            </div>
        )
    }
}



function mapStateToProps(state){
    return {
        toggleLeftNav:state.toggleNavWidth
    }
}

export default MainAppContents