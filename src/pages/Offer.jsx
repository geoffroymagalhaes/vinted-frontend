import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <section className="backcolorOffer">
      <section className="container flexOffer ">
        <div>
          <img className="imgOffer" src={data.product_image.url} alt="" />
        </div>
        <div className="textOffer">
          <p>{data.product_price} €</p>

          {data.product_details.map((details) => {
            return (
              <section className="flexDetails">
                <div>
                  <p>{Object.keys(details)}</p>
                </div>
                <div className="detailFromMap">
                  <p>{details.MARQUE}</p>
                  <p>{details.TAILLE}</p>
                  <p>{details.ÉTAT}</p>
                  <p>{details.COULEUR}</p>
                  <p>{details.EMPLACEMENT}</p>
                  <p>{details["MODES DE PAIEMENT"]}</p>
                </div>
              </section>
            );
          })}

          <h2>{data.product_name}</h2>
          <h3>{data.product_description}</h3>
          <div className="offerUserInfo">
            <img src={data.owner.account.avatar.url} alt="" />
            <h4>{data.owner.account.username}</h4>
          </div>
          <button className="buyButton">Acheter</button>
        </div>
      </section>
    </section>
  );
};

export default Offer;
