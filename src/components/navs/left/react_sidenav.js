import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { getUserInformation } from '../../../actions/actions.js'
import { connect } from 'react-redux';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { history } from 'react-icons-kit/icomoon/history';
import { starO  } from 'react-icons-kit/fa/starO';
import { ic_stars } from 'react-icons-kit/md/ic_stars';
import GameItem from './gameInNav.js';

import { NavLink } from 'react-router-dom';
const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const NavShape = styled.div`
    height:100% !important;
`


const BaseContainer = props =>
    <div
        style={{
            display: 'inline-block',
            paddingTop: 16,
            paddingBottom: 16,

            height:"100%",
            overflowX: "hidden",
            boxShadow:"inset rgba(0, 0, 0, 0.12) 1px 3px 13px 2px",
            ...props.style
        }}
    >
        {props.children}
    </div>;
const NavAlert = styled.span`
    text-align: center;
    line-height: 16px;
    height: 16px;
    margin:0 0 0 30px;
    border-radius: 9px;
    padding: 0px 10px;
    font-size: 9px;
    display: inline-block;
    color: #FFF;
    background: #ff5b57;
`
const NavCount = styled.span`
    text-align: center;
    line-height: 16px;
    height: 16px;
    width: 16px;
    margin: 0 0 0 30px;
    border-radius: '50%';
    font-size: 12px;
    display: inline-block;
    color: #FFF;
    background: #1a2229;
`

const UsrText = styled.span`
    background-color: transparent;
    color: inherit;
    display: inline-block;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    height: 27px;
    line-height: 28px;
    padding: 0 10px 1px;
    position: relative;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;
`


const SideNavWithAlerts = () =>
    <SideNav
        hoverBgColor="#232a2f"
        hoverColor="white"
        highlightBgColor="#00acac"
        defaultSelected="home"
        highlightColor="#FFF"
    >
        <div />
        <Nav id="home">

                <NavIcon><Icon20 icon={home} /></NavIcon>
                <NavText>
                    <NavLink to="/dashboard">{' '}<span style={{ paddingRight: 6 }}>Home</span>{' '}</NavLink>
                </NavText>
        </Nav>
        <Nav id="Current">
            <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
            <NavText> Current Games
                <NavCount>
                    3
                </NavCount>
            </NavText>
            <Nav id="game1">
                <NavText> Game 1
                    <NavAlert>
                        Your Turn!
                    </NavAlert>
                </NavText>
            </Nav>
            <Nav id="game2">
                <NavText> Game 2 </NavText>
            </Nav>
            <Nav id="game3">
                <NavText> Game 3
                    <NavAlert>
                        Your Turn!
                    </NavAlert>
                </NavText>
            </Nav>
        </Nav>
        <Nav
            id="history"
            onNavClick={() => {
                console.log('Sales clicked!', arguments);
            }}
        >


                <NavIcon><Icon20 icon={history} /></NavIcon><NavText> Recent Games </NavText>

        </Nav>
        <Nav id="trending">
            <NavIcon><Icon20 icon={starO } /></NavIcon>
            <NavText> Favorites </NavText>
        </Nav>
    </SideNav>;


class X extends React.Component {
    render() {
        return (
            <NavShape style={{ display: 'flex' }}>
                <BaseContainer
                    style={{
                        fontSize: 12,
                        background: '#ddd',
                        color: '#333',
                        paddingTop: 0,
                        height:"inherit",
                        borderLeft:"1px solid #222"
                    }}
                >
                    <SideNavWithAlerts />
                    <GameItem/>
                </BaseContainer>
            </NavShape>
        );
    }
}




export default X;