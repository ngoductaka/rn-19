import { createSlice } from "@reduxjs/toolkit"

const acc = createSlice({
    name: "message",
    initialState: {
        message: "Initial message"
    },
    reducers: {
        setAcc(state, action) {
            state.message = action.payload
        }
    }
});


export const { setAcc } = acc.actions


export default acc.reducer
