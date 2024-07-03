// const heading = React.createElement("h1",{id:"heading",xyz:"ko"},"hello")
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)





































// <div id="parent">
//     <div id="child">
//         <h1>
//             I am aakash
//         </h1>

//     </div>
{/* <div id="child2"> */}
//         <h1>
//             I am aakash
//         </h1>

//     </div>

// </div>




const createElement = React.createElement("div",{id:"parent"}, 
    [React.createElement("div",{id:"child"},
         [React.createElement("h1",{},"my name"),React.createElement("h2",{},"my name")]),
         React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"my name"),React.createElement("h2",{},"my name")])
        ])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(createElement)