import React, {Component} from  'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Container } from 'flux/utils'
import SampleStore from '../stores/SampleStore'
import Navi from './Navi';
import Menu from './Menu';
import SampleActionCreators from '../actions/SampleActionCreators';
import OrderListContent from './OrderListContent'
import Button from 'material-ui/Button';
import Content from  './Content'

class _OrderListComponent extends Component {
    static getStores() {
      return [SampleStore];
    }
  
    static calculateState() {
      return {
        sample: SampleStore.getState()
      };
    }
    
    constructor (props) {
        super(props)
        SampleActionCreators.action003()
    }
    takeOrders = (e) => {
        axios.get('http://localhost:3001/api/orders')
            .then(function (response) {
                console.log(response.data.data.orders);
            })
            .catch(function (error) {
                console.log(error);
        });
    }
    
    createOrder = (order) => {
        // console.log(order.oid)
        // return <Content/>
        return <OrderListContent style={{margin:"10px"}} oid={order.oid} id_u={order.id_u} />
    }

    allOrders = (orders) => orders.map(this.createOrder);

    // aa = () => {
    //     console.log(this.state.sample.orders)
    // }

    render() {
      return (
        <div>
        <Navi title="Orders"/>
        <div style={{display:"flex"}}>
          <Menu/>
          <ul>
            {this.allOrders(this.state.sample.orders)}
            </ul>
        </div>
      </div>
      );
    }
  }
  
  const OrderListComponent = Container.create(_OrderListComponent);
  export default OrderListComponent;
  