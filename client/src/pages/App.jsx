import React, { useEffect } from "react";
import { io } from "socket.io-client";
import AppRouter from "../routers/AppRouter";
import { useAuthState } from "../contexts/AuthStateProvider";

const App = () => {
  const [{ auth }] = useAuthState();

  useEffect(() => {
    if (!auth._id) return console.log("Web socket not connected!");

    const socket = io(process.env.REACT_APP_SOCKET_URL);

    socket.emit("join", auth._id, (error) => {
      if (error) {
        return console.log(error);
      }

      console.log("Web socket connected!");
    });
  }, [auth]);

  return <AppRouter />;
};

export default App;
