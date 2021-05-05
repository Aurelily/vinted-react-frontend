//import du hook useParams pour récupérer des paramètres passés dans les URLs
import { useParams } from "react-router-dom";
//import de la methode Link pour insérer des liens de navigation
import { Link } from "react-router-dom";
//import de mes composants utilisés ici
import Header from "../components/Header";

const Offer = () => {
  //Récupérer l'id
  //Faire une requète au serveur
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Header />
      <h1>Offer</h1>
      <Link to={"/"}>Go to Home page</Link>
      <div>J'ai cliqué sur l'id : {id}</div>
    </div>
  );
};

export default Offer;
