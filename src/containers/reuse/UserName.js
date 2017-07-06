import React from 'react';
import { bindActionCreators } from 'redux';
import { getUserImage } from '../../actions/actions.js'
import { connect } from 'react-redux';

class UserText extends React.Component {
    constructor(props){
        super(props)
        this.style =
            this.userInfo = {}
    }
    render() {
        const name = this.props.userInfo.name.split(' ')[0]
        return (
            <span style={{ ... this.props.style}}>
                {' '}{name}{' '}
            </span>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUserImage}, dispatch);
}
function mapStateToProps(state) {
    return {
        userInfo: state.userInformation
    };
}

export default connect(mapStateToProps, mapDispatchToProps())(UserText);