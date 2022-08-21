import { store } from "./3-store";
import { bugAdded, bugRemoved, bugResolved } from "./2-action-creators";

console.log(store)

// const { dispatch, getState, subscribe } = store; // props or functions of store: dispatch, getState, subscribe, replaceReducer

let unsubscribe = store.subscribe(() => {
    console.log(`store state`, store.getState())
})

store.dispatch(bugAdded("BUG_1"))
store.dispatch(bugAdded("BUG_2"))
store.dispatch(bugAdded("BUG_3"))
store.dispatch(bugAdded("BUG_4"))
store.dispatch(bugAdded("BUG_5"))


store.dispatch(bugRemoved(2))
store.dispatch(bugRemoved(0))

store.dispatch(bugResolved(3))
store.dispatch(bugResolved(1))

unsubscribe()

console.log(store.getState())
