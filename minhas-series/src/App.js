import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import axios from "axios";

const Home = () => {
  return <h1>Home</h1>;
};
const Generos = () => {
  return <h1>Generos</h1>;
};
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api").then((res) => {
      setData(res.data);
    });
  });
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/generos" element={<Generos />} />
          <pre>{JSON.stringify(data)}</pre>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
