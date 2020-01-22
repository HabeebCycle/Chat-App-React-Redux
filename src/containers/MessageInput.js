import React from "react";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
  const state = store.getState();

  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { typingValue, activeUserId } = state;
    store.dispatch(sendMessage(typingValue, activeUserId));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
