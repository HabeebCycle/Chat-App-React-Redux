import React, { useRef, useEffect } from "react";
import "./Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

const Chats = props => {
  const refInput = useRef();

  useEffect(() => {
    const { current } = refInput;
    current.scrollTop = current.scrollHeight;
  });

  return (
    <div className="Chats" ref={refInput}>
      {props.messages.map(message => (
        <Chat message={message} key={message.number} />
      ))}
    </div>
  );
};

export default Chats;
