import React, { useEffect } from "react";
import { io } from "socket.io-client";
import AppRouter from "../routers/AppRouter";
import { useAuthState } from "../contexts/AuthStateProvider";
import { useEmployerState } from "../contexts/EmployerStateProvider";
import { employerActionTypes } from "../reducers/employer";
import { useUserState } from "../contexts/UserStateProvider";
import { userActionTypes } from "../reducers/user";

const App = () => {
  const [{ auth }] = useAuthState();
  const [, employerDispatch] = useEmployerState();
  const [, userDispatch] = useUserState();

  useEffect(() => {
    if (!auth._id) return console.log("Web socket not connected!");

    const socket = io(process.env.REACT_APP_SOCKET_URL);

    socket.emit("join", auth._id, (error) => {
      if (error) {
        return console.log(error);
      }

      console.log("Web socket connected!");
    });

    socket.on("new-application", ({ application, notification }) => {
      employerDispatch({
        type: employerActionTypes.ADD_RESUME,
        resume: application,
      });
      employerDispatch({
        type: employerActionTypes.ADD_NOTIFICATION,
        notification,
      });
    });

    socket.on("change-application-status", ({ resume, notification }) => {
      userDispatch({
        type: userActionTypes.UPDATE_APPLICATION_STATUS,
        applicationId: resume._id,
        status: resume.status,
      });
      userDispatch({
        type: userActionTypes.ADD_NOTIFICATION,
        notification,
      });
    });

    socket.on("schedule-meeting", ({ resumeId, schedule, notification }) => {
      userDispatch({
        type: userActionTypes.UPDATE_APPLICATION,
        id: resumeId,
        updates: { schedule },
      });
      userDispatch({
        type: userActionTypes.ADD_NOTIFICATION,
        notification,
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [auth, employerDispatch, userDispatch]);

  return <AppRouter />;
};

export default App;
