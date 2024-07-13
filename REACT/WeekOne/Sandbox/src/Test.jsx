import React from "react";
import App from "./App";

const Test = ({user}) => {
  return (
    <>
      <div id="Test">{/* {console.log("props", props)} */}
<p>{user.username}</p>


      </div>
    </>
  );
};
export default Test;
