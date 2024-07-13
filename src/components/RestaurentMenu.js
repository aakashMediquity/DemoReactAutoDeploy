import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurentMenu = () => {
    const [resInfo ,setResInfo] = useState(null);
    const {resId} = useParams();
    // console.log(params,"params")
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
        MENU_API+ resId
    );
    const json = await data.json();
    console.log(json.data,"data");

    
    setResInfo(json.data)
  };

  if(resInfo === null) return <Shimmer/>;

  const {name ,cuisines,costForTwoMessage } =resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards,"pppppppppppppppppppp")
  const {categories} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(categories)
  const itemsToMap = itemCards || categories;

  return (
    <div className="menu">
      <h1>Name of the Restaurent:  {name}</h1>
      <h3>{cuisines.join(",")}-{costForTwoMessage}</h3>
      <h2></h2>
      <ul>
    {itemCards.map((item)=>(
                <li>key-{item.card.info.id} {item.card.info.name} --    {item.card.info.defaultPrice || item.card.info.price}</li>))}
       
      </ul>
    </div>
  );
};

export default RestaurentMenu;