import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    return (
      <section className="container formLogin ">
        <h1>Se connecter</h1>
        <form className="formLogin" onSubmit={handleSubmit}>
          <input
            title="Email"
            label="email"
            type="email"
            setState={setEmail}
            state={email}
          />
          <input
            title="Password"
            label="password"
            type="password"
            setState={setPassword}
            state={password}
          />
          <input type="submit" value="Se connecter" />
        </form>

        {/* <Link to="/signup">
          <p>Pas encore de compte ? Inscris-toi !</p>
        </Link> */}
      </section>
    );
  };
};
export default Login;
