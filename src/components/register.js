import React from 'react';
import foodImage from '../images/foodCuisi.jpg'
import '../style/register.css';

function Register() {
    return (

        <div>
            <div className='foodImage'>
                <img src={foodImage} />
           
                <form>
                    <div className="register">
                    <p>Welcome to Register</p>
                        <div className="name">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstname" />
                            <label htmlFor="Last Name">Last Name</label>
                            <input type="text" id="lastName" name="lastname" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div>
                            <label htmlFor="favFood">What is your Favourite Cuisine?</label>
                            <input type="text" id="favFood" name="favFood" />
                        </div>
                    </div>
                </form>
              
            </div>

        </div>

    )
}
export default Register;