import React from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import MessageInput from "../containers/MessageInput";
import "./ChatWindow.css";
import _ from "lodash";

const ChatWindow = props => {
  const state = store.getState();
  const activeUser = state.contacts[props.activeUserId];
  const activeMessage = state.messages[props.activeUserId];
  const typingValue = state.typingValue; //const { typingValue } = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMessage)} />
      <MessageInput value={typingValue} />
    </div>
  );
};

export default ChatWindow;