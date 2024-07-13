import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestarent, setfilteredRestarent] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("body render");
  useEffect(() => {
    fetchData();
  }, []);
  
  // "https://foodfire.onrender.com/api/restaurants?lat=26.921885&lng=75.723292&page_type=DESKTOP_WEB_LISTING"
  const fetchData = async () => {
    const data = await fetch(
      "https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    // console.log(
    //   json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    //   "bnnnnnnnnnnn"
    // );
    // at=28.462656&lng=77.048981

console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
console.log(json.data)

    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestarent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  //conditional rendering

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          {
         
         <button onClick={()=>{

         
          const filteredList=  listOfRestaurents.filter(res =>
              
              res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
              setfilteredRestarent(filteredList)
          }} >Search</button> 
          }
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurents(filteredList);
          }}
        >
          Top Rated Restaurent{" "}
        </button>
      </div>

      <div className="res-container">
        {filteredRestarent.map((restaurent) => (
          <Link key={restaurent.info.id}  to={"/restaurents/" +restaurent.info.id }> <RestaurentCard resData={restaurent} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
