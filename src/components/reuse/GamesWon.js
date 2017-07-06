import React from 'react';
import styled from 'styled-components';
import SvgIcon from 'react-icons-kit';
import { ic_stars } from 'react-icons-kit/md/ic_stars';

class WinsBadge extends React.Component {
    render() {
        return (
        <div>
            <div style={{   width: 20,
                height: 40,
                position: "relative",
            }}>
            </div >
            <Icon20 icon={ic_stars}></Icon20>
            <div style={{ marginLeft:2.5, width: 20, height: 40 }}>20</div>
        </div>
    );

    }
}

export default WinsBadge;