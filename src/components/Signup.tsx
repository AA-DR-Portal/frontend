import { CognitoUserAttribute, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import UserPool from "../utils/CognitoUserPool";

export const Signup = () => {
  const [email, setEmail] = useState({
    Name: "email",
    Value: "",
  });
  const [vendorType, setVendorType] = useState({
    Name: "custom:vendor_type",
    Value: "",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = (e: any) => {
    const attributeList = [];
    e.preventDefault();

    const attributeEmail = new CognitoUserAttribute(email);
    //const attributeVendor = new CognitoUserAttribute(vendorType);

    attributeList.push(attributeEmail);
    //SattributeList.push(attributeVendor);

    UserPool.signUp(
      username,
      password,
      attributeList,
      attributeList,
      (err, data) => {
        if (err) {
          console.log(err);
        } else{
          /* Debug */

          alert("Confirm user");
          
          const cognitoUser = data.user;
          const authenticationDetails = new AuthenticationDetails({
            Username: username,
            Password: password,
          });

          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (loggedInUser) => {
              const accessToken = loggedInUser.getAccessToken().getJwtToken();
               const idToken = loggedInUser.getIdToken().getJwtToken();
               console.log("Access token:", accessToken);
               console.log("ID Token:", idToken);
            },
            onFailure: (err) => {
              console.log(err);
            },
          });
        }
      }
    );
  };

  const handleVendorType = (e: any) => {
    setVendorType({ ...vendorType, Value: e.target.value });
  };

  return (
    <div>
      <h1>Create an account</h1>
      <form className="flex flex-col" onSubmit={onSignUp}>
        <label className="required" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="required" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          onChange={(e) => setEmail({ ...email, Value: e.target.value })}
        />
        <label className="required" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex">
          <h2>What type of vendor are you applying as?</h2>
          <input
            type="radio"
            id="artist"
            value="artist"
            onChange={handleVendorType}
          />
          <label htmlFor="artist">Artist</label>
          <input
            type="radio"
            id="dealer"
            value="dealer"
            onChange={handleVendorType}
          />
          <label htmlFor="artist">Dealer</label>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};
