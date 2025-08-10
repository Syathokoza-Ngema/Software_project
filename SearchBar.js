import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setResults }) {
    const [input, setInput] = useState(''); 

    const handleSearch = async () => {
        const res = await axios.get(`http://localhost:5000/api/words/search?query=${input}`);
        setResults(res.data);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search word..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button> 
        </div>
    );
}

export default SearchBar;
