import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
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
      <Navbar />
      <div className="card">
        <Signup />
      </div>
      <Footer />
    </div>
  );
}

export default App;
