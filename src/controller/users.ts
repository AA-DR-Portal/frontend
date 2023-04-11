import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import UserPool from "../utils/CognitoUserPool";

const signup = (user: {
  username: any;
  password: any;
  email: any;
  vendorType: any;
}) => {
  const { username, password, email, vendorType } = user;

  const attributeList = [];

  const attributeEmail = new CognitoUserAttribute(email);
  const attributeVendor = new CognitoUserAttribute(vendorType);

  attributeList.push(attributeEmail);
  attributeList.push(attributeVendor);

  UserPool.signUp(
    username,
    password,
    attributeList,
    attributeList,
    (err, data) => {
      err ? console.log(err) : console.log(data);
    }
  );
};

export { signup };
