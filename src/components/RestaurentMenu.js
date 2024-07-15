import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
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
      <h1 className="font-bold my-6 text-2xl">
        Name of the Restaurent: {name}
      </h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {/*  */}
      {category.map((category ,index) => {
        return <RestaurentCategory key={category?.card?.card?.title} data={category?.card?.card} 
        showItems={index === 1 ? true:false}/>;
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
