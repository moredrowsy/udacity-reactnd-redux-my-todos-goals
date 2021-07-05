import { RECEIVE_DATA } from "../actions/common.action";

const initialState = true;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}
