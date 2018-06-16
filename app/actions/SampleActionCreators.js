import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import axios from 'axios'
const SampleActionCreators = {

  action001(arg1) {
    // 1. Do something. (e.g. Fetch JSON from an API)
    // 2. Create an action from the result.
    // 3, Pass the action to the dispatch().
    AppDispatcher.dispatch({
      type: ActionTypes.TYPE_001,
      data: 'RESULT OF YOUR ACTION',
    });
  },

  action002(arg1) {
    AppDispatcher.dispatch({
      type: ActionTypes.TYPE_002,
      data: {
        "title": "New Title",
        "subtitle": "New Subtitle",
        "text": "New Text"
      },
    });
  },
  action003(arg1) {

  axios.get('http://localhost:3001/api/orders').then(function (response) {
      let result = response.data.data.orders
      console.log(response.data.data.orders)
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_003,
        data: {
          "orders": result,
        },
      })
    }).catch(function (error) {
      console.log(error);
    });
  },
  action004(arg1) {
  axios.get('http://localhost:3001/api/orders',{
    oid: arg1.oid
  })
  .then(function (response) {
    let result = response.data.data.order
    // console.log(response.data.data.order)
    AppDispatcher.dispatch({
      type: ActionTypes.TYPE_004,
      data: {
        "order": result,
      },
    })
  }).catch(function (error) {
      console.log(error);
    });
  },
  action005() {
    axios.get('http://localhost:3001/api/productcategory').then(function (response) {
      let result = response.data.data.productsCategory
      // console.log(response.data.data.productsCategory)
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_005,
        data: {
          "productCategory": result,
        },
      })
    }).catch(function (error) {
      console.log(error);
    });
  },
  action006(arg1) {
    axios.post('http://localhost:3001/api/product').then(function (response) {
      product: arg1.product
    })
  }

};

export default SampleActionCreators;
