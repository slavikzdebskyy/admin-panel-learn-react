import React from 'react';
import { useForm } from "react-hook-form";
import {connect} from "react-redux";

import './Login.scss';
import {loginAdminAction} from "../../store/action/admin.actions";

const Login = ({ login }) => {
  const { handleSubmit, register, errors } = useForm();
    return (
        <div className="w-100 login">
          <h1>Welcome to Admin panel!</h1>
          <form onSubmit={handleSubmit(login)}>
           <input
             placeholder="Email"
             name="email"
             type="text"
             ref={register({
               required: 'Required',
               pattern: {
                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                 message: "invalid email address"
               }
             })}
           />
           <span>
             {errors.email && errors.email.message}
           </span>


           <input
             placeholder="Password"
             name="password"
             type="password"
             ref={register({
               required: 'Required',
             })}
           />
           <span>
             {errors.password && errors.password.message}
           </span>

           <a href="/register" className="new-account">Create a new account?</a>
           <button type="submit" className="btn btn-info">Submit</button>
          </form>
        </div>
    )
}

const mapDispatchtoProps = () => dispatch => ({
  login: formData => dispatch(loginAdminAction(formData)),
})

export default connect(null, mapDispatchtoProps)(Login);
