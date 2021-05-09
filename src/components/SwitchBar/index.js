import Switch from "react-switch";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwitchBar = ({ url }) => {
  const [checked, setChecked] = useState(false);
  const [priceSort, setPriceSort] = useState("price-asc");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let newPriceSort = priceSort;

  const handleCheckChange = (nextChecked) => {
    setChecked(nextChecked);

    if (nextChecked === true) {
      newPriceSort = "price-asc";
      setPriceSort(newPriceSort);
    } else if (nextChecked === false) {
      newPriceSort = "price-desc";
      setPriceSort(newPriceSort);
    }
    console.log(nextChecked);
    console.log(priceSort);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}offers/?sort=${priceSort}`);
      console.log(response);
      setData(response.data);
      setIsLoading(false);
      setPriceSort(priceSort);
    };
    fetchData();
  }, [url, priceSort]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
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
