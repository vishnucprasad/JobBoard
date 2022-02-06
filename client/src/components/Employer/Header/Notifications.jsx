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
  const dropdownNotifications = notifications.slice(0, 10);

  useEffect(() => {
    !notifications[0] &&
      employerInstance
        .get("/notifications")
        .then((response) => {
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

  const markNotificationAsRead = (notificationId) => {
    employerInstance
      .post("/notifications/update/status", { notificationId })
      .then(({ data }) => {
        console.log(data);
        if (data.readStatus) {
          dispatch({
            type: employerActionTypes.UPDATE_READSTATUS,
            notificationId,
            readStatus: data.readStatus,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle className="shadow-none border-0" id="dropdown-basic">
        <div className="text-twitter">
          <NotificationsIcon />
          {unReadNotifications.length > 0 && (
            <span className="badge badge-twitter p-2">
              {unReadNotifications.length}
            </span>
          )}
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
        {dropdownNotifications[0] ? (
          dropdownNotifications.map((notification) => (
            <Dropdown.Item
              key={notification._id}
              className="shadow-none"
              onClick={() => markNotificationAsRead(notification._id)}
            >
              <Link to={notification.endpoint}>
                <div
                  className={
                    !notification.readStatus
                      ? "bg-light rounded animate-right-8 p-3"
                      : "rounded animate-right-8 p-3"
                  }
                >
                  <h6 className="d-md-flex justify-content-between">
                    <div className="text-twitter text-uppercase font-weight-bold">
                      {notification.title}
                    </div>
                    <div className="font-weight-bold">
                      {moment(parseInt(notification.createdAt)).format("LLLL")}
                    </div>
                  </h6>
                  <p className="m-0 text-truncate">{notification.text}</p>
                </div>
              </Link>
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item className="shadow-none">
            <div className="bg-light rounded animate-right-8 p-3">
              <p className="m-0 text-truncate">
                There is no notifications to show!
              </p>
            </div>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Notifications;
