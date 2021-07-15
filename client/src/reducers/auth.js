export const initialState = {
    auth: {}
};

export const actionTypes = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
};

const authReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                auth: { ...action.auth }
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                auth: {}
            }
        default:
            return state;
    }
};

export default authReducer;