import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class LoginForm extends Component {
    state={
isLike:false
    };
    handleLogin=()=>{
    this.setState({isLike:!this.state.isLike});
    }
        
   
    render() { 
        return (

        <div>
            <h1>Login</h1>
            <form >
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-control" required/>
                    </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input  id="password" type="text" className="form-control" required/>
                    </div>
                    <button onClick={this.handleLogin}className="btn btn-primary">Login</button>
            </form>
            {this.state.isLike===true ? <Redirect to="/movies"/>:""}
        </div>
               
        );
    }
}
 
export default LoginForm;
