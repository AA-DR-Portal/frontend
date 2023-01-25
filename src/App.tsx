import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Footer } from "./components/Footer";
import axios from "axios";
import "./App.css";
import { Signup } from "./components/Signup";

function App() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const getDate = async () => {
      const { data } = await axios.get("http://localhost:3001");
      setDate(data);
    };
    getDate();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <Signup />
      </div>
      <Footer />
    </div>
  );
}

export default App;
