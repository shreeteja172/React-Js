/**
 * <div id = "parent">
 *     <div id= "child">
 *         <h1> "i am H1"</h1>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement("h1",{},"I'm h1 tag")
    )
) 
// Read Notion docs created 

// const heading = React.createElement(
//   "h1",
//   { id: "abc" ,xyz: "head"},
//   "Hello World from React!"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
