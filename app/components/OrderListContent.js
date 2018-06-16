import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SampleActionCreator from '../actions/SampleActionCreators';

class OrderListContent extends Component {
    constructor (props) {
        super(props)
        //this.aa();
    }
    //aa = () => { console.log("aaa")}

  render() {
    return (
        <div>
        <li style={this.props.style}>
            <p>{this.props.oid}</p>
            <p>{this.props.id_u}</p>
        </li>
        </div>
    );
  }
}

// OrderListContent.propTypes = {
//   oid: PropTypes.string.isRequired,
//   u_id: PropTypes.string.isRequired,
// }

export default OrderListContent;
