import React from 'react';
import styled from 'styled-components';
import SvgIcon from 'react-icons-kit';
import { ic_stars } from 'react-icons-kit/md/ic_stars';
import  UserImage  from '../../../containers/reuse/UserImage.js'
import UserName from '../../../containers/reuse/UserName';
import NavText from '../../reuse/NavText.js'
const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;
const BaseContainer = props =>
    <div
        style={{
            height:"100%",
            ...props.style
        }}
    >
        {props.children}
    </div>;
const UsrText = styled.span`
    background-color: transparent;
    color: inherit;
    display: inline-block;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    padding: 2px 0 0 35px;
    position: relative;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;
`
const UserImageContainer = styled.div.attrs({
    width: props => props.dim || 25,
    height: props =>props.dim || 25
})`
    border-radius: 6;
    width: this.props.dim || 25;
    height: this.props.dim || 25;
    position: "absolute";
    top: 12.5;
`

/*

*/

class UserIcon extends React.Component {
    render() {
        return (
            <div>
                    <div style={{
                        display: 'flex', color:'white'
                    }}>
                        <div>
                            <UserImage style={{ borderRadius: 6,
                                                width: 25,
                                                height: 25,
                                                position: "absolute",
                                                top: 12.5, }}/>
                        </div>
                        <div>
                            <NavText text=""><UserName/></NavText>
                        </div>
                    </div>
            </div>
        );
    }
}




export default UserIcon;