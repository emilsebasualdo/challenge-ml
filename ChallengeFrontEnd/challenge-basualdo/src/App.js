import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchResults from './components/SearchResults.js';
import ItemDetail from './components/ItemDescription';
import MainContainer from './components/Main';

const App = () => {

    const [searchString, setSearchString] = useState('')
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])

    const headerProps = { setSearchString, searchString }
    const searchResultsProps = { items, setItems, setCategories }

    return (
        <div class="App">
            <Router>
                <Route path="/" render={() => <Header {...headerProps} />} />
                <MainContainer categories={categories}>
                    <Route exact path="/items" render={(routerInfo) =>
                        <SearchResults {...searchResultsProps} location={routerInfo.location}/>} />
                    <Route exact path="/items/:id" render={({ match }) =>
                        <ItemDetail id={match.params.id} />} />
                </MainContainer>
            </Router>
        </div>
    );
}

export default App;