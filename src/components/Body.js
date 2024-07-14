import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurentListData from "../utils/useRestaurentListData";
import { RESTAURENT_API_DATA } from "../utils/constant";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestarent, setfilteredRestarent] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("body render");

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      RESTAURENT_API_DATA
    );
    const json = await data.json();
  

console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
console.log(json.data)

    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestarent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };


  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Look like you are offline check your internet connection</h1>

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
