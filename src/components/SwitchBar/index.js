import "./index.css";

import Switch from "react-switch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwitchBar = ({ priceSort, setPriceSort }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (nextChecked) => {
    setChecked(nextChecked);

    if (nextChecked === true) {
      priceSort = "price-asc";
      setPriceSort(priceSort);
    } else if (nextChecked === false) {
      priceSort = "price-desc";
      setPriceSort(priceSort);
    }
    console.log(nextChecked);
    console.log(priceSort);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleCheckChange}
      handleDiameter={28}
      offColor="#09b1ba"
      onColor="#09b1ba"
      offHandleColor="#fff"
      onHandleColor="#fff"
      height={40}
      width={70}
      borderRadius={30}
      activeBoxShadow="0px 0px 1px 2px #fffc35"
      uncheckedIcon={<div className="txtSort">Desc</div>}
      checkedIcon={<div className="txtSort">Asc</div>}
      uncheckedHandleIcon={
        <div className="iconSort">
          <div>
            <FontAwesomeIcon icon="sort-down" color="grey" />
          </div>
        </div>
      }
      checkedHandleIcon={
        <div className="iconSort">
          <div>
            <FontAwesomeIcon icon="sort-up" color="grey" />
          </div>
        </div>
      }
      className="react-switch"
      id="small-radius-switch"
    />
  );
};

export default SwitchBar;
