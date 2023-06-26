import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "../src/Components/LoginForm";
import "./App.css";

const projectID = "31b32cdc-9c99-4294-947c-65efa68e7314";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;
