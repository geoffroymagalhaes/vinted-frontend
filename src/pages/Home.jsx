import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
      </div>
      <main className="container">
        {data.offers.map((article) => {
          return (
            <section className="articleContainer" key={article._id}>
              <Link to={`/offer/${article._id}`}>
                <div className="userInfo">
                  {/* <img
                    className="imgUser"
                    src={article.owner.account.avatar.url}
                    alt=""
                  /> */}
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
                    <div>
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
