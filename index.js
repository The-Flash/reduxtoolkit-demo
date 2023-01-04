const store = require("./app/store");
const { fetchUsers } = require("./features/user/userSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState());
});

store.dispatch(fetchUsers());

store.dispatch(cakeActions.ordered());

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());

store.dispatch(icecreamActions.restocked(5));

// unsubscribe();