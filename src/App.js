import React, { Component } from 'react';
import './App.css';
import CategoriesList from './components/categories-list/CategoriesList';

class App extends Component {
    render() {
        return (
            <div className="app">
                <CategoriesList />
            </div>
        );
    }
}

export default App;
