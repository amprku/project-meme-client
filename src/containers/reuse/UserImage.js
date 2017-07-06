import React from 'react';
import { bindActionCreators } from 'redux';
import { getUserImage } from '../../actions/actions.js'
import { connect } from 'react-redux';

class UserImage extends React.Component {
    constructor(props){
        super(props)
        this.userInfo = {}
    }
    render() {
        const {url} = this.props.userInfo.picture.data
        console.log(this)
        return (
            <img src= {url} style={{...this.props.style}}/>
        );
    }
}
function mapStateToProps(state) {
    return {
        userInfo: state.userInformation
    };
}

export default connect(mapStateToProps)(UserImage);