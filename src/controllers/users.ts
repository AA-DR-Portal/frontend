import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import UserPool from "../utils/CognitoUserPool";
import * as validation from "../utils/validation";

const signup = async (user: {
  username: any;
  password: any;
  email: any;
  vendorType: any;
}) => {
  // Destructuring the user object
  const { username, password, email, vendorType } = user;

  // Validation
  try {
    validation.invalidParams({
      username,
      password,
      email: email.Value,
      vendorType: vendorType.Value,
    });
    validation.invalidStrings({
      username,
      password,
      email: email.Value,
      vendorType: vendorType.Value,
    });
  } catch (e) {
    console.log(e);
    return;
  }

  const attributeList: CognitoUserAttribute[] = [];

  const attributeEmail = new CognitoUserAttribute(email);
  const attributeVendor = new CognitoUserAttribute(vendorType);

  attributeList.push(attributeEmail);
  attributeList.push(attributeVendor);

  const signup = new Promise((resolve, reject) => {
    UserPool.signUp(
      username,
      password,
      attributeList,
      attributeList,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });

  return await signup;
};

export { signup };
