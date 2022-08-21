import { createStore } from 'redux';
import reducer from "./4-reducer"

//note: store will be created once
export const store = createStore(reducer)