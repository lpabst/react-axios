import React from 'react';

import { dispatchGetCustomer } from './../../../services/workspaceService.js';

import './Customer.css';

export default function Customer( { id, first, last } ) {
  return (
    <div className="Customer__listName">
      <span onClick={ () => dispatchGetCustomer(id) }
      >{ first } { last }</span>
    </div>
  )
}