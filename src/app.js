import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/not-Found';
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';


class App  extends Component {
    render() { 
        return (
            <React.Fragment>
           <NavBar/>
            <main className="container">
                <Switch>
                <Route path="/loginForm" component={LoginForm}></Route>
                <Route path="/movies" component={Movies}></Route>
                <Route path="/customers" component={Customers}></Route>
                <Route path="/rentals" component={Rentals}></Route>
                <Route path="/not-Found" component={NotFound}></Route>
                <Redirect from="/" exact to="/movies"/>
                <Redirect to="/not-Found"/>
                </Switch>
            </main>
            </React.Fragment>
        );
    }
}
 
export default App ;