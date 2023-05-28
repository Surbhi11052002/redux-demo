//import redux from 'redux'; // if it was a react app

const redux = require("redux");
const createStore = redux.createStore;

//action
const CAKE_ORDERED = "CAKE_ORDERED";
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
//state
const initialState = {
  numOfCakes: 10,
};
//reducer
//(previousState,action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();

console.log("Initial state", store.getState());
store.dispatch(orderCake());
