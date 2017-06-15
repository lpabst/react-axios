import React from 'react';

import { dispatchShowCreateCustomer } from './../../../services/workspaceService.js';

import './CreateCustomer.css';

export default function CreateCustomer() {
  return (
    <div id="CreateCustomerBtn__container">
      <button id="CreateCustomer__btn"
      onClick={ dispatchShowCreateCustomer } > New Customer </button>
    </div>
  )
}