// actions.js
import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
  requestProducts: ["products"],
  receiveProducts: ["products"]
});

export { Creators, Types };
