import React from "react";

const App = ({foo}) => {
  console.log(foo);
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >App 2</h1>
    </div>
  )
}

export default App;

