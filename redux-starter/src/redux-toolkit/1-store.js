import { configureStore } from "@reduxjs/toolkit";
import reducer from "./2-reducer";

export default function () {
    return configureStore({
        reducer: reducer
    })
}