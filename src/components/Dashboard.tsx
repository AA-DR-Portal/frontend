import { useEffect, useState } from "react";
import UserPool from "../utils/CognitoUserPool";

export const Dashboard = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const user = UserPool.getCurrentUser();
    if (user) {
      setName(user.getUsername());
      user.getSession((err: Error, session: any) => {
        if (err) {
          console.log("Error: User is not logged in.");
        }
        console.log(session);
      });
    }
  }, []);
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};
