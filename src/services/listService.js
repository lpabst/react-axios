
import axios from 'axios';

import { getList } from './../ducks/listReducer.js';
import store from './../store.js';
import apiURL from './../api.js';

export function dispatchGetList() {
    const promise = axios.get(apiURL).then( res => res.data );
    store.dispatch( getList(promise) );
}
