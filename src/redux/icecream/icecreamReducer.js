import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  numOficecreams: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOficecreams: state.numOficecreams - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
