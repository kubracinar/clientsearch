import React, { useState } from 'react';
import SearchResult from './SearchResult';

const Search = ({ clients }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchShow, setSearchShow] = useState(false);
    if (!clients) return <div>No Clients</div>;
    const filteredClients = clients.filter((client) => {
        return (
            client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            client.policyNumber.includes(searchQuery)
        );
    });

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value === '') {
            setSearchShow(false);
        } else {
            setSearchShow(true);
        }
    };

    return (
        <div>
            <nav className="nav-search">
                <header className="container search-header">
                    <i className="fa fa-search" data-testid="search-icon"></i>
                    <input
                        data-testid="search-input"
                        type="search"
                        className="search-input"
                        placeholder="Search ( Client Name / Policy Number )"
                        onChange={handleChange}
                    />
                </header>
            </nav>
            {searchShow ? <SearchResult filteredClients={filteredClients} /> : ''}
        </div>
    );
};

export default Search;