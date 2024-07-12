import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurentMenu = () => {
    const [resInfo ,setResInfo] = useState(null);
    const params = useParams();
    console.log(params,"params")
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
        "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=18.9486&lng=72.83662&restaurantId= 569607"  
    );
    const json = await data.json();
    // console.log(json.data ,"DATNNNNNNNNNNA");

    // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[11].card.info.name,"llllllllll");
    // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards,"ssssssssssssssssssssssssllllllllll");

    setResInfo(json.data)
  };

  if(resInfo === null) return <Shimmer/>;

  const {name ,cuisines,costForTwoMessage } =resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} =resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(resInfo,"pppppppppppppppppppp")
       
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
