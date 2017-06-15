
import axios from 'axios';

import store from './../store.js';
import apiURL from './../api.js';
import { showCreateCustomer, createCustomer } from './../ducks/workspaceReducer.js';
import { dispatchGetList } from './listService.js';

export function dispatchShowCreateCustomer (){
    store.dispatch( showCreateCustomer() );
}

export function dispatchCreateCustomer (obj){
    const promise = axios.post( apiURL, obj ).then( res => {
        dispatchGetList(); 
    });

    store.dispatch( createCustomer(promise) );
}
