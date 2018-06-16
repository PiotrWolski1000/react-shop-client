import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import TopContainer from "./components/TopContainer";
import SampleContainer from "./components/SampleContainer";
import LoginComponent from "./components/LoginComponent";

import OrderListComponent from "./components/OrderListComponent"
import AddProductComponent from "./components/AddProductComponent"
const muiTheme = createMuiTheme({});

render(
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <div>
        <Route exact path="/" component={TopContainer} />
        <Route path="/sample" component={SampleContainer} />
        {/* <Route path="/login" component={LoginComponent}/> */}
        <Route path="/orderlist" component={OrderListComponent}/>
        <Route path="/addproduct" component={AddProductComponent}/>
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
