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
const GET_CUSTOMER = 'GET_CUSTOMER';
const GET_CUSTOMER_FULFILLED = 'GET_CUSTOMER_FULFILLED';
const GET_CUSTOMER_PENDING = 'GET_CUSTOMER_PENDING';
const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
const UPDATE_CUSTOMER_FULFILLED = 'UPDATE_CUSTOMER_FULFILLED';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
const DELETE_CUSTOMER_FULFILLED = 'DELETE_CUSTOMER_FULFILLED';

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
    case UPDATE_CUSTOMER_FULFILLED:
      return Object.assign({}, state, {
        customer: action.payload
      })
    case DELETE_CUSTOMER_FULFILLED:
      return Object.assign({}, state, {
        customer: {},
        initialLoad: true
      })
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

export function updateCustomer(promise){
  return {
    type: UPDATE_CUSTOMER,
    payload: promise
  }
}

export function deleteCustomer(promise){
  return {
    type: DELETE_CUSTOMER,
    payload: promise
  }
}
