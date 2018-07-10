import React from 'react';
import { Context } from '../AddCoupon';

const ExcludedItemsTable = () => {
  return(
    <Context.Consumer>
    {
      context =>
      <table className='table is-striped is-hoverable is-fullwidth has-text-centered'>
        <tbody>
          {context.excludedItems.sort((a, b) => {
          return a.localeCompare(b);
        }).map((item, i) =>
          <tr key={i}>
            <td key={i} style={{width: '90%'}}>{item}</td>
            <td style={{width: '10%'}}><button class="delete is-medium" onClick={context.removeFromList} name={item}/></td>
          </tr>)}
        </tbody>
      </table>
    }
    </Context.Consumer>
  );  
}

export default ExcludedItemsTable;