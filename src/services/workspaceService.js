
import axios from 'axios';

import store from './../store.js';
import apiURL from './../api.js';
import { showCreateCustomer, createCustomer, getCustomer, updateCustomer, deleteCustomer } from './../ducks/workspaceReducer.js';
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

export function dispatchGetCustomer (id){
    const promise = axios.get( apiURL+id ).then( res => res.data );

    store.dispatch( getCustomer(promise) );
}

export function dispatchUpdateCustomer (id, obj){
    const promise = axios.patch( apiURL+id, obj ).then( res => {
        dispatchGetList();
        return res.data
    });

    store.dispatch( updateCustomer(promise) );
}

export function dispatchDeleteCustomer (id){
    const promise = axios.delete( apiURL+id ).then( res => {
        dispatchGetList();    
    });

    store.dispatch( deleteCustomer(promise) );
}
