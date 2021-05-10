import "./index.css";

//import du package React-range pour le slider
import { Range } from "react-range";

const Slider = ({ priceMax, setPriceMax, priceMin, setPriceMin }) => {
  return (
    <div className="range-slider">
      <span>{`priceMin : ${priceMin}`}</span>
      <span>{`priceMax : ${priceMax}`}</span>
    </div>
  );
};

export default Slider;
