import React, {useEffect, useState} from 'react';
import {Header} from './components'
import {Route} from "react-router-dom";
import {Cart, Home} from "./pages";
import axios from 'axios';

function App() {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
           setPizzas(data.pizzas);
        })
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" render={() => <Home pizzas={pizzas}/>} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
