import { GET_DATA } from "../actions";

const initialState = {
  queryList: [],
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        queryList: action.payload,
      };
    default:
      return state;
  }
};

export default queryReducer;
