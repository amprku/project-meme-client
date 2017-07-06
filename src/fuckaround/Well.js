import React from 'react';
import merge from 'lodash/merge';

const Well = props => {
    if (props.isDisplayed) {
        return (
            <div style={styles}>
                {props.children}
            </div>
        );
    } else {
        const lockedStyle = merge({}, styles, {
            alignItems: 'center',
            svg: {
                width: 140
            }
        });
        return (
            <div style={lockedStyle}>

            </div>
        )
    }
};

const styles = {
    border: '1px solid rgb(217, 217, 217)',
    height: 200,
    width: 250,
    padding: 10,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: '#effbfc',
    borderRadius: 30

};

export default Well;