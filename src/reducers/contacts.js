import { contacts } from "../helpers/static-data";
import { SEND_MESSAGE } from "../constants/action-types";
import _ from "lodash";

const initialState = contacts;

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { userId } = action.payload;
      const allContacts = _.values(state);
      allContacts.forEach(function(item, i){
        if(item.user_id === userId){
          allContacts.splice(i, 1);
          allContacts.unshift(item);
        }
      });
      return _.keyBy(allContacts, 'user_id');
    default:
      return state;
  }
};
