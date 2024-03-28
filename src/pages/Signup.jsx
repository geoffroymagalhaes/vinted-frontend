import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="container formSignup ">
      <h1>S'inscrire</h1>
      <form className="" onSubmit={handleSubmit}>
        <input
          className="inBorderR"
          placeholder="Nom d'utilisateur"
          title="Name"
          label="name"
          type="text"
          setState={setName}
          state={name}
        />
        <input
          className="inBorderR"
          placeholder="Email"
          title="Email"
          label="email"
          type="email"
          setState={setEmail}
          state={email}
        />
        <input
          className="inBorderR"
          placeholder="Mot de passe"
          title="Password"
          label="password"
          type="password"
          setState={setPassword}
          state={password}
        />
        <div>
          <input type="checkbox" setState={setCheckbox} state={checkbox} />
          <h2>S'inscrire à notre newsletter</h2>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>

        <input type="submit" value="S'inscrire" />
      </form>

      <Link to="/login">
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </Link>
    </section>
  );
};
export default Signup;
