import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { logggdInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 hover:border-[#696666] hover:border" >
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
     
      <div className="flex justify-between items-center mb-2">
        <h2
          className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[65%] text-3xl font-medium"
          title={name}
        >
          {name}
        </h2>
        <div className="px-2 text-xl rounded bg-[#267e3e] text-white">
          {avgRating}
          <i
            className="fa-solid fa-star fa-xs ml-1"
            style={{ color: "white" }}
          ></i>
        </div>
      </div>
      <h4>{cuisines.join(", ")}</h4>


      <div className="flex justify-between ">
        {/* <h5>{avgRating} stars</h5> */}
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
