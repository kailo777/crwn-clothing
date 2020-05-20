import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
