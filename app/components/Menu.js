import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem } from 'material-ui/List';
// import OrderLoginComponent
class Menu extends Component {
  render() {
    return (
      <List style={{width: '15%'}}>
        <ListSubheader>Menu</ListSubheader>
        {/* <ListItem component={Link} to="/">Top</ListItem> */}
        {/* <ListItem component={Link} to="/sample">Sample</ListItem> */}
        <ListItem component={Link} to="/orderlist">Orders</ListItem>
        <ListItem component={Link} to="/addproduct">Create an offert</ListItem>
        
      </List>
    );
  }
}

export default Menu;
