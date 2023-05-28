//import redux from 'redux'; // if it was a react app

const redux = require("redux");
const createStore = redux.createStore;

//action
const CAKE_ORDERED = "CAKE_ORDERED";
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1, // in redux the convention is to use a property called payload,
    // for any additional information you want to send
  };
}

const CAKE_RESTOCKED = "CAKE_RESTOCKED";
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
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
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
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
store.dispatch(restockCake(2));

unsubscribe();

console.log("Initial state", store.getState());
store.dispatch(orderCake()); // the update statement won't show after unsubscribing..
