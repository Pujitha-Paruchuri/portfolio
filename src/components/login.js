import React from 'react';
import '../style/login.css';
import foodImage from '../images/loginimage.jpg'

function Login() {
    return (

        <div>
            <div className='loginImage'>
                <img src={foodImage} />
                <p>Welcome to Login</p>
                <form>
                    <div className="login">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                    </div>
                </form>
            </div>

        </div>

    )
}
export default Login;