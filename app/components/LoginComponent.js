import React, { Component } from 'react';
import Button from 'material-ui/Button';

class LoginComponent extends React.Component {
    render() {
        handleClick = (e) => {
            SampleActionCreator.action001()//login action
        }
        //execute handleClick function with action to login
        return (
            <div>
                <h2>login</h2>
                <Button color='secondary' onClick={this.handleClick}>Try Flux</Button>
            </div>
        )
    }
}


export default LoginComponent;