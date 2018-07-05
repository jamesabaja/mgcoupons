import React from 'react';

const Panel = (props) => {
  return(
    <nav className='panel' style={{width: '100%'}}>
      <div className='panel-block'>
        <p class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="search" onChange={props.searchData}/>
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      {props.isLoading && <p className='has-text-centered subtitle is-5' style={{paddingTop: '10px'}}>Loading data...</p>}
      <div style={{overflowY: 'auto', height: '391px'}}>
      {props.searchResults.map((item, i) => 
        <a className='panel-block' key={i}>{item.title}</a>
      )}
      </div>
    </nav>
  );
}

export default Panel;