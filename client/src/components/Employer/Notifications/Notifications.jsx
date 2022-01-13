import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";

const Notifications = () => {
  const [{ notifications }] = useEmployerState();

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <div className="text-uppercase d-md-flex mb-0">
            <div className="font-weight-bolder h6">Notifications</div>
            <div className="w-md-25 ml-auto">
              <button className="btn btn-primary btn-sm">
                Mark all as read
              </button>
            </div>
          </div>
        </div>
        <div className="card-body shadow-inset rounded m-3 px-3 py-0">
          <div className="scroll-70 px-2 pt-2 pb-0">
            {notifications[0] ? (
              notifications.map((notification) => (
                <div className="my-4">
                  <Link to={notification.endpoint}>
                    <div className="bg-light rounded animate-right-8 p-3">
                      <h6 className="d-md-flex justify-content-between">
                        <div className="text-twitter text-uppercase font-weight-bold">
                          {notification.title}
                        </div>
                        <div className="font-weight-bold">
                          {moment(parseInt(notification.createdAt)).format(
                            "LLLL"
                          )}
                        </div>
                      </h6>
                      <p className="m-0" style={{ wordBreak: "break-word" }}>
                        {notification.text}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="card shadow-soft rounded my-4">
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="font-weight-bold">
                      There is no notifications to show!
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
