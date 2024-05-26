import React from "react";

const Login = () => {
    return (
        <div>Login

<div class="white-bg-bb">
        <div className="login-page">
            <div>
                <h1>Login</h1>
            </div>
            
            <div className="login-form">
                <form action="#">

                    <div className="login-inputs">
                        <div class="login-email">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
    
                        <div className="login-password">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </div>
                    </div>

                    <input type="button" value="Submit" action="#" className="submit-button" />
                </form>
            </div>
        </div>

    </div>
        </div>
    )
}

export default Login;