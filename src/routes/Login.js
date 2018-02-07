import React from 'react';
import './Routes.css';

// 1. check password saved in local storage.
// 2. if valied, read input password and check.
// 3. show menus that user could access.
const Login = () => {
    return (
        <div className='content-main'>
            <p>
                Login : 
                <input type='password' id="password" />
                <button onClick='{()=>console.log("login")}'>Login</button>
            </p>
            <p>
                (Input password issued by system administrator!)
            </p>
        </div>
    );
};

export default Login;