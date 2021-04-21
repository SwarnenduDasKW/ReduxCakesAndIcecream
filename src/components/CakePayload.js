import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, fetchUsers } from "../redux";

function CakePayload() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [cakeQty, SetCakeQty] = useState(1);

  const handleClick = () => {
    dispatch(fetchUsers());
    console.log("Potential Buyers", userData);
  };
  return (
    <div>
      <h2>Number of Cakes Payload - {numOfCakes}</h2>
      <input
        type="text"
        value={cakeQty}
        onChange={(e) => SetCakeQty(e.target.value)}
      ></input>
      <button onClick={() => dispatch(buyCake(cakeQty))}>
        Buy {cakeQty} Cakes Hooks Payload
      </button>
      <button onClick={handleClick}>Show Potential Buyers</button>
    </div>
  );
}

export default CakePayload;
