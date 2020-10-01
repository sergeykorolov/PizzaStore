import React, {useEffect} from 'react';
import {Header} from './components'
import {Route} from "react-router-dom";
import {Cart, Home} from "./pages";
import axios from 'axios';
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then(({data}) => {
           dispatch(setPizzas(data));
        })
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
