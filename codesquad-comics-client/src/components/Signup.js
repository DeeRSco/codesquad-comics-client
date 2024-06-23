import React, { useState, useEffect } from "react";

const Signup = ({ user, setUser }) => {
  const handleSignupSubmit = (event) => {
    console.log("The signup form has been submitted");
    console.log(`Submitted: Username: ${user.username}, Password: ${user.password}, First Name:${user.fName}, Last Name: ${user.lName}`);
  };

  return (
    <div>
      Signup Form
         <div className="signup-page white-bg-bb">
          <div>
            <h1>Signup</h1>
          </div>

          <div className="signupForm">
            <form action="#" onSubmit={handleSignupSubmit}>
              <div className="signupInputs">
                <div class="signupUsername">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    required
                  />
                </div>

                <div className="signupPassword">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="signupfName">
                  <label htmlFor="fName">First Name:</label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className="signuplName">
                  <label htmlFor="lName">Last Name:</label>
                  <input
                    type="lName"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
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
   
  );
};

export default Signup;
