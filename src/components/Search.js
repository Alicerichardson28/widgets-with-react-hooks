import React, { useState, useEffect }from 'react';

const Search = () => {
    const [term, setTerm]= useState('');

    console.log('I Run with every renders')
    useEffect(() => {
        console.log('I run after every render');
    },[])
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
        </div>
    )
};

export default Search;