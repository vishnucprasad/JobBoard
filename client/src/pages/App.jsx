import React, { useEffect } from "react";
import { io } from "socket.io-client";
import AppRouter from "../routers/AppRouter";
import { useAuthState } from "../contexts/AuthStateProvider";
import { useEmployerState } from "../contexts/EmployerStateProvider";
import { employerActionTypes } from "../reducers/employer";

const App = () => {
  const [{ auth }] = useAuthState();
  const [, employerDispatch] = useEmployerState();

  useEffect(() => {
    if (!auth._id) return console.log("Web socket not connected!");

    const socket = io(process.env.REACT_APP_SOCKET_URL);

    socket.emit("join", auth._id, (error) => {
      if (error) {
        return console.log(error);
      }

      console.log("Web socket connected!");
    });

    socket.on("new-application", (application) => {
      employerDispatch({
        type: employerActionTypes.ADD_RESUME,
        resume: application,
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [auth, employerDispatch]);

  return <AppRouter />;
};

export default App;
