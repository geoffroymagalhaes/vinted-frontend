import "./App.css";
import { useState } from "react";
import Cookies from "js-cookie";

// Import ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

// Import components
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  console.log(token);
  const [search, setSearch] = useState("");

  // const checkToken = (token) => {
  //   if (token) {
  //     Cookies.set("token", token, { exprires: 15 });
  //     setToken(token);
  //   } else {
  //     Cookies.remove("token");
  //     setToken(null);
  //   }
  // };
  return (
    <Router>
      <Header
        token={token}
        seach={search}
        setSearch={setSearch}
        setToken={setToken}
      />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/publish" element={<Publish token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
