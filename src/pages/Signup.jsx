import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = ({ setToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    try {
      const { data } = await axios.post(
        `https://site--backend-vinted--tvp4vjmpy6zn.code.run/user/signup`,
        {
          email,
          username: name,
          password,
          newsletter,
        }
      );
      Cookies.set("Vtoken", data.token, { expires: 15 });
      setToken(data.token);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
      // if (error.response.data === 409) {
      //   console.log(error.response.data);
      //   setErrorMessage("this email already has an account");
      // } else if (error.response.data.message === "Missing parameters")
      //   setErrorMessage("Please fill in all the fields");
    }
  };

  return (
    <section className="container formSignup ">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inBorderR"
          placeholder="Nom d'utilisateur"
          title="Name"
          label="name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          className="inBorderR"
          placeholder="Email"
          title="Email"
          label="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="inBorderR"
          placeholder="Mot de passe"
          title="Password"
          label="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="checkbox">
          <input
            type="checkbox"
            title="checkbox"
            label="checkbox"
            value={newsletter}
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          <h2>S'inscrire à notre newsletter</h2>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>

        <input className="signupSubmit" type="submit" value="S'inscrire" />
        {errorMessage && <p className="errorMessage"> {errorMessage} </p>}
      </form>

      <Link className="linkLogin" to="/login">
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </Link>
    </section>
  );
};
export default Signup;
