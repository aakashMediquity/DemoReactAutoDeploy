import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo:{
            name:"Dummy",
            location:"ioo",
            avatar_url:"op"

        }
    };
    // console.log(this.props.name + "child constructor");
  }
  async componentDidMount() {
   const data  = await fetch("https://api.github.com/users/aakash9112000")
   const json = await data.json()
   console.log(json);
   this.setState({
    userInfo:json
   })
  }
  

  render() {
    const { name, location,avatar_url } = this.state.userInfo;
   
    // console.log(this.props.name + "child render");

    return (
      <div className="user-card">
        <img src="https://avatars.githubusercontent.com/u/66056721?v=4"></img>
       
        <h2>Name: {name}</h2>
        <h3>Location :{location}</h3>
        <h4>phone</h4>
      </div>
    );
  }
}
export default UserClass;
