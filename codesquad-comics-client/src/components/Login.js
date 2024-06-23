import React from "react";

const Login = ({ user, setUser }) => {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("The prevent default method has run.");
    console.log(`Submitted: Email: ${user.email}, Password: ${user.password}`)
  };

  return (
    <div>
      Login
      <div class="white-bg-bb">
        <div className="login-page">
          <div>
            <h1>Login</h1>
          </div>

          <div className="login-form">
            <form onSubmit={handleLoginSubmit}>
              <div className="login-inputs">
                <div class="login-email">
                  <label htmlFor="email">Email address:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="login-password">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <input
                type="button"
                value="Submit"
                action="#"
                className="submit-button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
