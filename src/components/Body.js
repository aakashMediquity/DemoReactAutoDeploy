import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
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
      "https://www.swiggy.com/api/seo/getListing?lat=26.921885&lng=75.723292"
    );
    const json = await data.json();
    //optional chaining
    console.log(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      "bnnnnnnnnnnn"
    );
    setListOfRestaurents(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestarent(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
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
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
