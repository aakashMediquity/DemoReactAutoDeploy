import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURENT_API_DATA } from "../utils/constant";
import Footer from "./Footer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestarent, setfilteredRestarent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (listOfRestaurents.length) {
      setLoading(false);
    }
  }, [listOfRestaurents]);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURENT_API_DATA);
      const json = await response.json();
      console.log('Fetched Data:', json); // Debug line
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurents(restaurants);
      setfilteredRestarent(restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you are offline. Please check your internet connection.</h1>;

  const handleSearch = () => {
    const filteredList = listOfRestaurents.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredRestarent(filteredList);
  };

 return (
  <div className="body">
    <div className="filter flex items-center justify-center p-4">
      <div className="search flex items-center justify-center p-4 m-4 bg-gray-50 rounded-lg shadow-md">
        <input
          type="text"
          className="border border-gray-300 w-full sm:w-96 h-10 px-4 rounded-lg focus:outline-none focus:border-green-400"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="ml-4 py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-800 transition duration-300 ease-in-out"
          onClick={handleSearch}
        >
          <i className="fa-solid fa-magnifying-glass"></i> Search
        </button>
      </div>
    </div>

    <div className="flex flex-wrap justify-center">
      {loading ? (
        Array(20).fill("").map((_, index) => <Shimmer key={index} />)
      ) : filteredRestarent.length === 0 ? (
        <h1>No restaurants found.</h1>
      ) : (
        filteredRestarent.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={`/restaurents/${restaurent.info.id}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          >
            {restaurent.info.avgRating >= 4.0 && restaurent.info.avgRating <= 4.2 ? (
              <RestaurentCardPromoted resData={restaurent} />
            ) : (
              <RestaurentCard resData={restaurent} />
            )}
          </Link>
        ))
      )}
    </div>

    <Footer />
  </div>
);

};

export default Body;
