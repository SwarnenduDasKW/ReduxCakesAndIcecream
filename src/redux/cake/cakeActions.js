import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (cakeQty = 1) => {
  return {
    type: BUY_CAKE,
    payload: cakeQty,
  };
};
