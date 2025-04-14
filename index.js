const counterReducer = (state = { value: 0 }, action) => {
    if (action.type === 'ADD') return { value: state.value + 1 };
    if (action.type === 'SUBTRACT') return { value: state.value -1 };
    if (action.type === 'RESET') return { value: 0 };

    return state; 
}

function createStore(reducer) {
    let state;  // The current state, which is undefined initially.
    let subscribers = [];  // A list of functions that get called when the state changes.
  
    // Updates the state //
    const dispatch = (action) => {
      state = reducer(state, action);  // Get the new state by calling the reducer.
      subscribers.forEach((subscriber) => subscriber());  // Call each subscriber to notify them of state change.
    };
  
    // Gets the current state //
    const getState = () => state;
  
    // Subscribe to state changes
    const subscribe = (subscriber) => {
        subscribers.push(subscriber);  // Add the subscriber to the subscribers list
        return () => subscribers = subscribers.filter(l => l !== subscriber);

    };
  
    // Initialize state by dispatching dummy action //
    dispatch({ type: '__INIT__' });  // Ensures state is not undefined.
  
    // Return an object that has methods for dispatching, getting the new state, and subscribing.
    return { dispatch, getState, subscribe };
  }

  const store = createStore(counterReducer);

  store.subscribe(() => {
    console.log('Current state:', store.getState());
  });


  console.log(store.getState());

  console.log(store.dispatch({ type: 'ADD' }));
  console.log(store.getState());

  console.log(store.dispatch({ type: 'ADD' }));
  console.log(store.getState());

  console.log(store.dispatch({ type: 'SUBTRACT' }));
  console.log(store.getState());

  console.log(store.dispatch({ type: 'RESET' }));
  console.log(store.getState());
  


