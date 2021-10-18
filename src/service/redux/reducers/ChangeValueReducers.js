import { CHANGE_VALUE } from "../const";

export default function ChangeValueReducers(state = 0, action = null) {
  switch (action.type) {
    case CHANGE_VALUE:
      return state + action.data;
    default:
      return state;
  }
}