import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { logggdInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-white shadow-md hover:bg-gray-50 hover:border-gray-300 border border-transparent transition-all duration-300 ease-in-out">
    <img className="rounded-lg w-full h-40 object-cover" src={CDN_URL + cloudinaryImageId} alt={name}></img>
    
    <div className="flex justify-between items-center mb-2 mt-4">
      <h2
        className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[65%] text-xl font-semibold text-gray-800"
        title={name}
      >
        {name}
      </h2>
      <div className="px-2 py-1 text-lg rounded bg-green-600 text-white flex items-center">
        {avgRating}
        <i className="fa-solid fa-star fa-xs ml-1" style={{ color: "white" }}></i>
      </div>
    </div>
    <h4 className="text-gray-600 text-sm mb-2">{cuisines.join(", ")}</h4>
  
    <div className="flex justify-between text-sm text-gray-500">
      <h5>{sla.slaString}</h5>
      <h5>{areaName}</h5>
    </div>
  </div>
  
  );
};


export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};
export default RestaurentCard;
