import { CDN_URL } from "../utils/constant";
const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <div className="res-RatingTime">
        <h5>{avgRating} stars</h5>
        <h5>{sla.slaString}</h5>
      </div>
    </div>
  );
};
export default RestaurentCard;
