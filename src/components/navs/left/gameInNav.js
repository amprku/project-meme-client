import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import styled from 'styled-components';
import { MenuItem } from 'react-bootstrap';
const SectionHeader = styled.h3`
    float:left;
    font-size:11px;
    padding-left:20px;
    margin-bottom:8px;
    text-transform:uppercase;
    line-height: 16px;
`
const Container = styled.li`
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
`

const Bar = styled.hr`
    padding:0;
    margin-top:0;
    border-color:#999;
`
const NavCount = styled.span`
    text-align: center;
    line-height: 16px;
    float:right;
    height: 16px;
    width: 16px;
    margin: 0 0 0 75px;
    border-radius: '50%';
    font-size: 12px;
    display: inline-block;
    color: #FFF;
    background: #1a2229;
`

class GameItem extends Component {
    render() {
        const title = (
            <SectionHeader></SectionHeader>
        );
        return (
            <div>
                <SectionHeader>Current Games
                    <NavCount>
                        3
                    </NavCount>
                </SectionHeader>
                <Bar width="85%" noshade></Bar>
            </div>
                )
    }
}


export default GameItem;
