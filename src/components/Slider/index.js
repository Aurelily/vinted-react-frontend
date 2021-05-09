import "./index.css";

//import du package React-range pour le slider
import { Range } from "react-range";

const Slider = ({ priceMax, setPriceMax, priceMin, setPriceMin }) => {
  return (
    <div className="range-slider">
      <span>{`priceMax : ${priceMax}`}</span>
      <span>{`priceMin : ${priceMin}`}</span>
    </div>
  );
};

export default Slider;
