import RestaurentCard ,{withPromotedLabel} from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useRestaurentListData from "../utils/useRestaurentListData";
import { RESTAURENT_API_DATA } from "../utils/constant";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestarent, setfilteredRestarent] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurentCardPromoted  = withPromotedLabel(RestaurentCard)
  // console.log("body render");

  useEffect(() => {
    fetchData()}, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURENT_API_DATA);
    const json = await data.json();

    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // ,"show data");
    // console.log(json.data);

    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestarent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Look like you are offline check your internet connection</h1>;

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-center">
        <div className="search p-4 m-4 ">
          <input
            type="text"
            className="border  w-96 mx- h-8 border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          {
            <button
              className=" py-2 w-24 h-10 bg-green-200 rounded-lg hover:bg-green-800 hover:text-white"
              onClick={() => {
                const filteredList = listOfRestaurents.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestarent(filteredList);
              }}
            >
              Search
            </button>
          }
          
        </div>
      
      </div>
      {/* <div className="search p-4 m-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg "
            onClick={() => {
              const filteredList = listOfRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurents(filteredList);
            }}
          >
            Top Rated Restaurent{" "}
          </button>
        </div> */}

      <div className="flex flex-wrap">
        {filteredRestarent.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurents/" + restaurent.info.id}
          >
            {
              restaurent.info.avgRating >= 4.0 && restaurent.info.avgRating <= 4.2? 
              (<RestaurentCardPromoted resData={restaurent} />

              ): ( 
              <RestaurentCard resData={restaurent} />)
            }
           
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
