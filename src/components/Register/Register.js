import React from 'react';

import './Register.scss';

const Register = () => {
    return (
        <div className="register-form">
          <form>
            <input id ="firstname" placeholder="First name" inputType="text"/>
            <input id ="lastname" placeholder="Last name" inputType="text"/>
            <input id ="email" placeholder="Email" inputType="email"/>
            <input id ="password" placeholder="Password" inputType="password"/>
            <input id ="confirm-password" placeholder="Confirm password" inputType="password"/>
            
            <div className="radio-group">
              <div className="radio">
                <label>
                  <input type="radio" value="male" checked={true} />
                  Male
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="female" />
                  Female
                </label>
              </div>
            </div>
          
          <button type="submit" onClick={ console.log('click')}>Submit</button>
          </form>
        </div>
    )
}

export default Register;