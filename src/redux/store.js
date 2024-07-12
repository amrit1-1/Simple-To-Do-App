import { createStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer";

// I used createstore here as I couldn't figure out how to use the configure store element instead.
const store = createStore(rootReducer)

export default store;