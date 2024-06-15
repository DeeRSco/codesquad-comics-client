import React from "react";

const Signup = ({ user, setUser }) => {
  const handleSignupSubmit = (event) => {
    console.log("The signup form has been submitted");
    console.log(`Submitted: Username: ${username}, Password: {password}, First Name:${fName}, Last Name: ${lName}`);
  };

  return (
    <div>
      Signup Form
      <div class="white-bg-bb">
        <div className="signup-page">
          <div>
            <h1>Signup</h1>
          </div>

          <div className="signupForm">
            <form action="#" onSubmit={handleSignupSubmit}>
              <div className="signupInputs">
                <div class="signupUsername">
                  <label htmlFor="username">Username:</label>
                  <input
                    required
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </div>

                <div className="signupPassword">
                  <label htmlFor="password">Password:</label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="signupfName">
                  <label htmlFor="fName">First Name:</label>
                  <input
                    required
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                  />
                </div>

                <div className="signuplName">
                  <label htmlFor="lName">Last Name:</label>
                  <input
                    required
                    type="lName"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
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

export default Signup;
