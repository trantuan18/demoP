import { CHANGE_VALUE } from "../const";

export const ChangeValue = (data) => {
  return {
    type: CHANGE_VALUE,
    data
  }
}
