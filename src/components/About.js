import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../UserContext";


class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("parent  componentDidMount")
    }
    componentDidUpdate(){
        console.log("component did updated")
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
        console.log("Parent render")
        return (
            
        
            <div>
                <h1>About</h1>
                <h2>This is namaste js</h2>
                <div>
                    Logggd In User
                    <UserContext.Consumer>
                        {({logggdInUser})=> 
                          <h1 className="text-xl font-bold">{logggdInUser}</h1>
                          
                             }
                    </UserContext.Consumer>
                </div>
                {/* <User name="Aakash Yadav" location ="jaipur"/> */}
                <UserClass name="Aakash Yadav"  location ="jaipur"/>
                {/* <UserClass name="Elon Yadav"  location ="jaipur"/> */}
            </div>
           
        )
    }
}


// const About = () =>{
//     <Header></Header>
//     return (
        
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste js</h2>
//             {/* <User name="Aakash Yadav" location ="jaipur"/> */}
//             <UserClass name="Aakash Yadav"  location ="jaipur"/>
//         </div>
       
//     )
// }

export default About;