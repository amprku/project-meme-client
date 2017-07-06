import React from 'react';
import styled from 'styled-components';

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

class CleanText extends React.Component {
    render(){
        return (<UsrText> {this.props.text} </UsrText>)
    }
}

export default CleanText