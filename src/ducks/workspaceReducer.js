import apiURL from '../api';

const initialState = {
  loading: false,
  customer: {},
  initialLoad: true,
  creating: false
};

const SHOW_CREATE_CUSTOMER = 'SHOW_CREATE_CUSTOMER';
const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
const CREATE_CUSTOMER_PENDING = 'CREATE_CUSTOMER_PENDING';
const CREATE_CUSTOMER_FULFILLED = 'CREATE_CUSTOMER_FULFILLED';
const GET_CUSTOMER_FULFILLED = 'GET_CUSTOMER_FULFILLED';
const GET_CUSTOMER_PENDING = 'GET_CUSTOMER_PENDING';

export default function workspaceReducer( state = initialState, action ) {
  switch( action.type ) {
    case SHOW_CREATE_CUSTOMER:
      return Object.assign({}, state, {creating: true})
    case CREATE_CUSTOMER_FULFILLED:
      return {
        loading: false,
        initialLoad: true,
        customer: {},
        creating: false
      }

    case GET_CUSTOMER_PENDING:
      return {
        loading: true,
        customer: {},
        initialLoad: false,
        creating: false
      }
    case GET_CUSTOMER_FULFILLED:
      return Object.assign({}, state, {
        loading: false,
        customer: action.payload
      })

    // Get Customer - Fulfilled

    // Update Customer - Fulfilled

    // Delete Customer - Fulfilled

    default: 
      return state;
  }
}

export function showCreateCustomer(){
  return {
    type: SHOW_CREATE_CUSTOMER,
    payload: null
  }
}

export function createCustomer(promise){
  return {
    type: CREATE_CUSTOMER,
    payload: promise
  }
}

export function getCustomer(promise){
  return {
    type: GET_CUSTOMER,
    payload: promise
  }
}
