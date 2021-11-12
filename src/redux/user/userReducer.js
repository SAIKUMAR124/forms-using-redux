import { SET_FORM_DATA } from "./userTypes";

const initialState = {
    data: {}
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
        console.log(action)
        return {
            ...state,
            data: action.payload,

        }
    default:
      return state;
  }
};

export default formReducer;
