import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement => Object => HTMLRender(render)
//JSX transpiled before reaching the js - Parcel - Babel
//JSX => React.createElement => Object => HTMLRender(render)
// console.log("Hello")

// const heading = <h1 id='heading' className='head'>Hello from JSX</h1>

const Heading = () =>{
  return <h1>Nama3te from Arrow Function</h1>;
}

const Component = () => (
  <div id='container'>
    <h1>Nothing just jsx code 😎</h1>
  </div>
);

const Head = () => (
  <div id='Head'>
    <span>
      <p>
        <Component/>
        Lorem ipsum dolor sit amet.
      </p>
    </span>
  </div>
);


// console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Heading/>)
root.render(<Head/>)