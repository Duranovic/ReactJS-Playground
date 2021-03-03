import React from 'react';
import './search.scss';
import {FaSearch} from 'react-icons/fa';

export const Search = (props) => {
    return (
        <div className="search">
            <span className="search-icon">
                <FaSearch color="gray" size="18px"/>
            </span>
            <input type="text" placeholder={props.placeholder??"Search text here..."}/>
        </div>
    )
}