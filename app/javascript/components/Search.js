import React from "react";

const Search = (props) => {
  const searchResults = props.searchResults.map(curr => 
    <li key={curr.id} data-id={curr.id} onClick={props.handleSelect} className="currency-list-item">
      <a href="#" className="currency">
         <span>{curr.name}</span>
         <span className="currency_symbol">{curr.currency_symbol}</span>
      </a>
    </li>
   )
   return(
    <div>
       <h1>Cryptocurrency Portfolio Calculator</h1>
       <div className="form-group">
         <label>Search for a currency</label><br/>
        <input onChange={props.handleChange} autoComplete="off" type="text" name="name" placeholder="Ex: Bitcoin, Litecoin, Ethereum..." value={props.name} className="field"/>
      </div>
      <div className="currency-list">
         {searchResults}
      </div>
    </div>
  )
}

export default Search;
