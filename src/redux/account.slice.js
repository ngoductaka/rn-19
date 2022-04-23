import { createSlice } from "@reduxjs/toolkit"

const account = createSlice({
    name: "account",
    initialState: {
        userData: {
            token: '',
            name: ''
        },
        isLogin: false,
        loading: false,
        errors: null,
    },
    reducers: {
        setDataUser: (state, action) => {
            const dataUpdate = action.payload;
            state.name = dataUpdate.name;
        },
        fetchDataSS: (state, action) => {
            const dataUpdate = action.payload;
            state.age = dataUpdate.age;
        },
        // handleLogin
        requestLogin(state) {
            state.loading = true;
            state.errors = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.errors = null;
            state.userData = action.payload;
            state.isLogin = true;

        },
        loginFail(state, action) {
            state.loading = false;
            state.errors = action.payload;

        }
    }
});


// action
export const {
    setDataUser,
    fetchDataSS,
    requestLogin,
    loginSuccess,
    loginFail
} = account.actions;
// export const setDataUser = (data) => ({
//     type: 'account/setDataUser',
//     payload: data
// })
// export const fetchDataSS = (data) => ({
//     type: 'account/fetchDataSS',
//     payload: data
// })

// 

export default account.reducer