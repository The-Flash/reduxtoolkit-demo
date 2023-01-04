const createSlice = require("@reduxjs/toolkit").createSlice;
// const createAction = require("@reduxjs/toolkit").createAction;
const { cakeActions } = require("../cake/cakeSlice");

// createAction("cake/ordered")

const initialState = {
    numOfIceCreams: 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--;
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                cakeActions.ordered,
                (state) => {
                    state.numOfIceCreams--;
                }
            );
    },

});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;

// extraReducers: {
//     ["cake/ordered"]: (state) => {
//         state.numOfIceCreams--;
//     }
// },
