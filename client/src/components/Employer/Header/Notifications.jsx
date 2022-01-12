import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../../reducers/employer";
import { employerInstance } from "../../../axios/axios";
import moment from "moment";

const Notifications = () => {
  const [{ notifications }, dispatch] = useEmployerState();
  const unReadNotifications = notifications.filter(
    (notification) => !notification.readStatus
  );

  useEffect(() => {
    !notifications[0] &&
      employerInstance
        .get("/notifications")
        .then((response) => {
          console.log(response.data);
          if (response.data[0]) {
            dispatch({
              type: employerActionTypes.SET_NOTIFICATIONS,
              notifications: response.data,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }, [notifications, dispatch]);

  return (
    <Dropdown>
      <Dropdown.Toggle className="shadow-none border-0" id="dropdown-basic">
        <div className="text-twitter">
          <NotificationsIcon />
          <span className="badge badge-twitter p-2">
            {unReadNotifications.length}
          </span>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="d-flex px-4">
          <Link
            to="/employer/notifications"
            className="text-twitter font-weight-bolder text-center ml-auto"
          >
            Show All
          </Link>
        </div>
        {notifications[0] ? (
          notifications.map((notification) => (
            <Dropdown.Item key={notification._id} className="shadow-none">
              <Link to={notification.endpoint}>
                <div className="bg-light rounded animate-right-8 p-3">
                  <h6 className="d-md-flex justify-content-between">
                    <div className="text-twitter text-uppercase font-weight-bold">
                      {notification.title}
                    </div>
                    <div className="font-weight-bold">
                      {moment(parseInt(notification.createdAt)).format("LLLL")}
                    </div>
                  </h6>
                  <p
                    className="m-0 text-truncate"
                    style={{ wordBreak: "break-word" }}
                  >
                    {notification.text}
                  </p>
                </div>
              </Link>
            </Dropdown.Item>
          ))
        ) : (
          <div className="bg-light rounded animate-right-8 p-3">
            <h6 className="text-twitter">There is no notifications to show!</h6>
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Notifications;
