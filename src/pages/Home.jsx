import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// --import img--
import Tear from "../assets/img/tear.svg";

const Home = ({ search }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      // `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`,
      `https://site--backend-vinted--tvp4vjmpy6zn.code.run/offers?title=${search}`
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <div className="hero">
        <div className="container ">
          <div className=" heroSign">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <button>Commencer à vendre</button>
          </div>
        </div>
        <div className="tear">
          <img className="tearImg" src={Tear} alt="" />
        </div>
      </div>
      <main className="container">
        {data.offers.map((article) => {
          return (
            <section className="articleContainer" key={article._id}>
              <Link to={`/offer/${article._id}`}>
                <div className="userInfo">
                  {article.owner.account.avatar && (
                    <img
                      className="imgUser"
                      src={article.owner.account.avatar.url}
                      alt=""
                    />
                  )}
                  <h2>{article.owner.account.username}</h2>
                </div>
                <img
                  className="imgArticle"
                  src={article.product_image.url}
                  alt=""
                />

                <h3>{article.product_price} €</h3>
                {article.product_details.map((details) => {
                  return (
                    <div className="productDescription">
                      <h4>{details.MARQUE}</h4>
                      <h5>{details.TAILLE}</h5>
                    </div>
                  );
                })}
              </Link>
            </section>
          );
        })}
      </main>
    </>
  );
};

export default Home;
