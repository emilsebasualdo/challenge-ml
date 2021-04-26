import myLogo from './assets/Logo_ML.png';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './styles/Header.css'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = ({
    history,
    setSearchString,
    searchString
}) => {
    const [newSearchString, setNewSearchString] = useState('')

    useEffect(() => {
        history.location.search === '' && setSearchString('')
    }, [history.location, setSearchString]);

    const handleSubmit = event => {
        event.preventDefault();
        (newSearchString !== '' && newSearchString !== searchString) && getSearchResults()
    }

    const getSearchResults = async () => {
        setSearchString(newSearchString)
        history.push(`/items?search=${newSearchString}`)
    }
    return ( 
        <header>
            <div class="topnav">
            <div class="row">
                <div class="col-1">
                <Link to="/">
                    <img class="LogoMl" alt="Logo" src={myLogo}/>
                </Link>
                    
                </div>
                <div class="col-11 text-center">
                    <input value={newSearchString}
                        onChange={event => setNewSearchString(event.target.value)} 
                        class="search-box" type="text" placeholder="Nunca dejes de buscar"/>
                    <button type="submit" class="searchButton" onClick={handleSubmit}></button>
                </div>
            </div>
                
                
                
            </div>
        </header>
    );
}

export default withRouter(Header)