import React from 'react';

import './Login.scss';

const Login = () => {
    return (
        <div className="w-100 login">
          <h1>Welcome to Admin panel!</h1>
          <form>
           <input id ="username" placeholder="Username" inputType="text"/>
           <input id ="password" placeholder="Password" inputType="password"/> 
           <a href="/register" className="new-account">Create a new account?</a>
           <button type="submit" className="btn btn-info" onClick={ console.log('click')}>Submit</button>
          </form>
        </div>
    )
}

export default Login;