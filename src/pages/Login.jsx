import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");
      const { data } = await axios.post(
        // "https://lereacteur-vinted-api.herokuapp.com/user/logins",
        `https://site--backend-vinted--tvp4vjmpy6zn.code.run/user/logins`,
        { email, password }
      );
      Cookies.set("Vtoken", data.token, { expires: 15 });
      setToken(data.token);
      navigate("/");
    } catch (error) {
      if (error.response.data.message === "User not found") {
        setErrorMessage("Champ requis manquant.");
      } else if (error.response.data.error)
        setErrorMessage("Email ou Mot de passe incorrect.");

      console.log(error.response.error);
    }
  };

  return (
    <section className="container formLogin ">
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inBorderR "
          placeholder="Adresse email"
          title="Email"
          label="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="inBorderR "
          placeholder="Mot de passe"
          title="Password"
          label="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input className="loginSubmit" type="submit" value="Se connecter" />
        {errorMessage && <p className="errorMessage"> {errorMessage} </p>}
      </form>

      <Link className="linkSignin" to="/signup">
        <p>Pas encore de compte ? Inscris-toi !</p>
      </Link>
    </section>
  );
};
export default Login;
