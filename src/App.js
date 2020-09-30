import React, {useEffect, useState} from 'react';
import {Header} from './components'
import {Route} from "react-router-dom";
import {Cart, Home} from "./pages";
import axios from 'axios';
import {connect} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

function App(props) {

    // const [pizzas, setPizzas] = useState(props.items);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
           props.setPizzas(data.pizzas);
        })
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" render={() => <Home pizzas={props.items}/>} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzasReducer.items
    }
}

export default connect(mapStateToProps, {setPizzas})(App);
