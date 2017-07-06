import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { circle_plus } from 'react-icons-kit/ikons/circle_plus';
import { cog } from 'react-icons-kit/ikons/cog';
import { user_add } from 'react-icons-kit/ikons/user_add';
import { fire } from 'react-icons-kit/icomoon/fire';
import { menu } from 'react-icons-kit/icomoon/menu';
import { user_circle } from 'react-icons-kit/ikons/user_circle';
import { toggleLeftNav } from '../../../actions/actions.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Nav,NavItem,NavDropdown, MenuItem} from 'react-bootstrap'
import UserIcon from './UserIcon.js'
import CleanText from '../../reuse/NavText.js'


import SvgIcon from 'react-icons-kit';
const Icon = props => <SvgIcon size={props.size || 20} icon={props.icon} height={50}/>;

class TopNavItems extends Component {

    render(){
        const settingIcon = <Icon icon ={cog}/>
        const userIcon = <Icon icon={user_circle}/>
        return (
            <div>
                <Nav pullLeft>
                    <NavDropdown id="asdf" eventKey={1} title={settingIcon}>
                        <MenuItem eventKey={1.1}>Settings</MenuItem>
                        <MenuItem eventKey={1.2}>Account</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={0}>Logout</MenuItem>
                    </NavDropdown>
                    <NavDropdown id="asdf" eventKey={1} title={userIcon}>
                        <MenuItem eventKey={1.2}><UserIcon/> <CleanText text="Account"/></MenuItem>
                        <MenuItem divider />
                    </NavDropdown>
                    <NavItem eventKey={2} style={{padding:"0 !important", marginLeft: 30}}>
                        <UserIcon/>
                    </NavItem>
                    <NavItem eventKey={3}><Icon icon={fire}/></NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={4} onClick={() => this.props.toggleLeftNav()}><Icon icon={menu}/></NavItem>
                </Nav>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleLeftNav
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        isOpen: state.leftNavToggle,
    };
}


export default connect(mapStateToProps, mapDispatchToProps )(TopNavItems);