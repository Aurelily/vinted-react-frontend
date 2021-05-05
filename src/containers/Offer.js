//import du hook useParams pour récupérer des paramètres passés dans les URLs
// import { useParams } from "react-router-dom";
//import de la methode Link pour insérer des liens de navigation
import { Link } from "react-router-dom";
//import de mes composants utilisés ici
import Header from "../components/Header";

const Offer = () => {
  return (
    <div>
      <Header />
      <h1>Offer</h1>
      <Link to={"/"}>Go to Home page</Link>
    </div>
  );
};

export default Offer;
