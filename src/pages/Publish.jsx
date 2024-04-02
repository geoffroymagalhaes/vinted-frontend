import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState("");
  const [marque, setMarque] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, SetExchange] = useState(false);
  const [pictureFromCloudinary, setPictureFromCloudinary] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("marque", marque);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("exchange", exchange);

      const response = await axios.post(
        // "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        `https://site--backend-vinted--tvp4vjmpy6zn.code.run/offer/publish`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setPictureFromCloudinary(response.data.secure_url);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return token ? (
    <section className=" backColor ">
      <div className="container">
        <h1 className="titlePubish">Vends ton article</h1>
        <form onSubmit={handleSubmit}>
          <div className="importPublish">
            <input
              type="file"
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
            />
          </div>
          <div className="formPubishContainer">
            <article className="articlePublish">
              <h2>Titre</h2>
              <input
                type="text"
                value={marque}
                name="title"
                placeholder="ex: Chemise Sézane verte"
                onChange={(event) => {
                  setMarque(event.target.value);
                }}
              />
            </article>
            <article className="articlePublish">
              <h2>Décris ton article</h2>
              <textarea
                rows={6}
                cols={60}
                type="text"
                value={description}
                name="description"
                placeholder="ex: porté quelquefois"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </article>
          </div>
          <div className="formPubishContainer">
            <article className="articlePublish">
              <h2>Marque</h2>
              <input
                type="text"
                value={brand}
                name="brand"
                placeholder="ex: Patagonia"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </article>
            <article className="articlePublish">
              <h2>Taille</h2>
              <input
                type="text"
                value={size}
                name="size"
                placeholder="ex: L / 40/ 12"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </article>
            <article className="articlePublish">
              <h2>Couleur</h2>
              <input
                type="text"
                value={color}
                name="color"
                placeholder="ex: Vert"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </article>
            <article className="articlePublish">
              <h2>Etat</h2>
              <input
                type="text"
                value={condition}
                name="condition"
                placeholder="ex: Neuf"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </article>
            <article className="articlePublish">
              <h2>Lieu</h2>
              <input
                type="text"
                value={city}
                name="city"
                placeholder="ex: Paris"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </article>
          </div>
          <div className="formPubishContainer">
            <article className="articlePublish">
              <h2>Prix</h2>
              <input
                type="text"
                value={price}
                name="price"
                placeholder="0,00 €"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </article>
            <article className="checkoxPublish">
              <h2></h2>
              <input
                type="checkbox"
                value={exchange}
                name="exchange"
                onChange={(event) => {
                  SetExchange(event.target.value);
                }}
              />
              <p>Je suis intéressé(e) par les échanges</p>
            </article>
          </div>
          <article className="submitFlex">
            <input className="submitPublish" type="submit" value="Ajouter" />
          </article>
        </form>
      </div>
    </section>
  ) : (
    <Navigate to="/login" />
  );
};
export default Publish;
