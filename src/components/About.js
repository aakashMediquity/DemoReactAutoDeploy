import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../UserContext";
import file from "../assets/file.png";
import burger from "../assets/burgerImage.png";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("parent  componentDidMount");
  }
  componentDidUpdate() {
    console.log("component did updated");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log("Parent render");
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* About Section */}
     
    
          {/* About Section 2 */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div className="about-container flex flex-col md:flex-row items-center justify-center py-12">
        {/* Left Section */}
        <div className="about-left md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to <br /> The world of <br />
            <span className="text-orange-500">Zwiggy Food</span>
          </h1>
          <h4 className="text-lg md:text-xl">
            "Better you will feel if you eat a Food<span className="text-orange-500">Fire</span> healthy
            meal"
          </h4>
        </div>

        {/* Right Section */}
        <div className="about-right md:w-1/2">
          <img src={file} alt="Food Image" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* About Section */}
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        {/* <h2 className="text-xl mb-8">This is Namaste JS</h2> */}

        {/* Logged In User Section */}
        {/* <div className="mb-8">
          
          <UserContext.Consumer>
            {({ logggdInUser }) => (
              <p className="text-xl font-bold">{logggdInUser}</p>
            )}
          </UserContext.Consumer>
        </div> */}
        <div className="flex">

        {/* UserClass Component */}
      
        </div>
        {/* Additional Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Mission Statement</h3>
            <p className="text-gray-700">
              Our mission is to deliver the most delicious and nutritious food to our customers, ensuring
              satisfaction and well-being.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Company History</h3>
            <p className="text-gray-700">
              Founded in 20XX, has grown from a small startup to a renowned provider of quality food
              products, serving customers worldwide.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">User Details</h3>
          <UserClass name="Aakash Yadav" location="Jaipur" />
        </div>
      </div>
    </div>
  
        </div>
      );
  }
}

export default About;
