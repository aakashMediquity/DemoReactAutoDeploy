import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {logggdInUser} = useContext(UserContext)
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold  py-4 text-xl ">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <div className="res-RatingTime">
        <h5>{avgRating} stars</h5>
        <h5>{sla.slaString}</h5>
        <h5>{logggdInUser}</h5>
        
      </div>
    </div>
  );
};
// higher order component 
//input - restaurent => restaurentCardPromoted

export const withPromotedLabel  = (RestaurentCard) =>{
  return(props) =>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
      <RestaurentCard {...props}/>
      </div>
    );
  };
};
export default RestaurentCard;
