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

export default function workspaceReducer( state = initialState, action ) {
  switch( action.type ) {
    case SHOW_CREATE_CUSTOMER:
      return object.assign({}, state, {creating: true})
    case CREATE_CUSTOMER_FULFILLED:
      return {
        loading: false,
        initialLoad: true,
        customer: {},
        creating: false
      }

    // Get Customer - Pending

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
