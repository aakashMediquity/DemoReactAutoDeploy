import {ShimmerRestaurant} from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
import { CDN_URL } from "../utils/constant";
const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);
  const [showIndex,setShowIndex] = useState(0);

  if (resInfo === null) return <ShimmerRestaurant />;

  const { name, cuisines, costForTwoMessage ,cloudinaryImageId ,
    areaName ,avgRating ,city
  } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(
    resInfo?.cards[2]?.card?.card?.info,
    " data contains here"
  );

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(category, "data of catergory");

  return (
    <div className="text-center">
 <h1 className="font-bold my-6 text-3xl text-gray-800">
  Name of the Restaurant: {name}
</h1>
<div className="flex text-center justify-center ">


<img className="rounded-lg w-80 h-40 object-cover" src={CDN_URL + cloudinaryImageId}></img>


<div className="px-2 py-1 text-lg w-14 h-8 rounded bg-green-600 text-white flex items-center">
        {avgRating}
        <i className="fa-solid fa-star fa-xs ml-1" style={{ color: "white" }}></i>
      </div>
      </div>

     <div className="flex text-center justify-center  ">
     <h4 className="mx-12">Area :      {areaName}</h4>
     <h4>City :         {city}</h4>
     </div>
      
<p className="font-semibold text-lg text-gray-600">
  {cuisines.join(", ")} - {costForTwoMessage}
</p>

      {/*  */}
      {category.map((category, index) => {
        return (
          <RestaurentCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex ={()=> setShowIndex(index)}
          />
        );
      })}
      {/* <h2></h2> */}
      {/* <ul>
        {itemCards.map((item) => (
          <li>
            key-{item.card.info.id} {item.card.info.name} --{" "}
            {item.card.info.defaultPrice || item.card.info.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurentMenu;
