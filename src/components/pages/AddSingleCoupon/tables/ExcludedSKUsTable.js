import React from 'react';
import { Context } from '../AddCoupon';

const ExcludedSKUsTable = () => {
  return(
    <Context.Consumer>
    {
      context => 
      <table className='table is-striped is-hoverable is-fullwidth has-text-centered'>
        <tbody>
          {context.excludedSKUs.map((item, i) =>
          <tr key={i}>
            <td key={i} style={{width: '90%'}}><p><b>Category: </b>{item.category}</p><p><b>Class/es: </b>{item.classList.join(', ')}</p><p><b>Restrictions: </b>{item.rxOnly && item.otcOnly ? 'Prescription/OTC' : item.rxOnly ? 'Prescription' : item.otcOnly ? 'OTC' : ''}</p></td>
            <td style={{width: '10%'}}><button class="delete is-medium" onClick={context.removeFromSKUs} name={item.category}/></td>
          </tr>)}
        </tbody>
      </table>
    }
    </Context.Consumer>
  );
}

export default ExcludedSKUsTable;