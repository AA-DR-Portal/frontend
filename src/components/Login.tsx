import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPool from "../utils/CognitoUserPool";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = (e: any) => {
    e.preventDefault();

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: async (result) => {
        // const accessToken = result.getAccessToken().getJwtToken();
        // const response = await getRequest(accessToken);
        navigate("/dashboard");
      },
      onFailure: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="flex flex-col" onSubmit={onLogin}>
        <label className="required" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="required" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};
