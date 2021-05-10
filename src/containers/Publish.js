import axios from "axios";

//import FontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus);

const Publish = ({ setUser, filtersShow, setFiltersShow }) => {
  filtersShow = false;
  setFiltersShow(filtersShow);

  return (
    <div className="container">
      <div className="publish-container">
        <h1>Vends ton article</h1>
        <form>
          <div className="file-select">
            <div className="dash-preview-without">
              <div className="btAddPhoto">
                <label for="file" className="label-file">
                  <div className="sign">
                    <FontAwesomeIcon icon="plus" color="#09b1ba" />
                  </div>
                  <span>Ajouter une photo</span>
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="input-file"
                />
              </div>
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="ex. Chemise Sézane verte"
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="ex.porté quelque fois, taille correctement"
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                id="brand"
                name="selecbrandtedBrand"
                placeholder="ex. Zara"
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <input
                type="text"
                id="size"
                name="size"
                placeholder="ex : L / 40 / 12"
              />
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                id="color"
                name="color"
                placeholder="ex : Fushia"
              />
            </div>
            <div className="text-input">
              <h4>Etat</h4>
              <input
                type="text"
                id="condition"
                name="condition"
                placeholder="ex : Neuf avec étiquette"
              />
            </div>
            <div className="text-input">
              <h4>Lieu</h4>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="ex : Paris"
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Prix</h4>
              <div className="checkbox-section">
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="0.00 €"
                />
                <div className="checkbox-input">
                  <input
                    type="checkbox"
                    name="exchange"
                    id="exchange"
                    value="exchange"
                  />
                  <span>Je suis intéressé(e) par les échanges</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-button-div">
            <button className="btBlue">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
