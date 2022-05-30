
import React from 'react';
import SearchResultItem from './SearchResultItem';

function SearchResult({ filteredClients }) {
    if(filteredClients.length){const filtered = filteredClients.map((client) => (
        <SearchResultItem key={client.id} client={client} />
    ));
        return <>{filtered}</>;}
    else{

        return <div className="search-dropdown no-options">
            <em>This name/policy number not found!</em>
        </div>


    }

}

export default SearchResult;
