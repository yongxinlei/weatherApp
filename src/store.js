// Redux:
import { configureStore } from "@reduxjs/toolkit";
import weatherApi from "./weatherApi";

const store = configureStore({
  reducer: weatherApi,
});

export default store;
