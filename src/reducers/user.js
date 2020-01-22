import { generateUser } from "../helpers/static-data";

const initialState = generateUser();

export default (state = initialState, action) => {
  return state;
}
