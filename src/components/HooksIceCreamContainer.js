import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux";

function HooksIceCreamContainer() {
  const numOficecreams = useSelector((state) => state.icecream.numOficecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecreans from Hooks - {numOficecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>
        Buy Icecream Hooks
      </button>
    </div>
  );
}

export default HooksIceCreamContainer;
