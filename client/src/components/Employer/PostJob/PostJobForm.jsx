import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import CompanyDetailsInputs from "./CompanyDetailsInputs";
import JobDetailsInputs from "./JobDetailsInputs";
import Loader from "./Loader";
import Axios, { employerInstance } from "../../../axios/axios";
import { useEmployerState } from "../../../contexts/EmployerStateProvider";
import { employerActionTypes } from "../../../reducers/employer";
import { LoaderToast, Toast } from "../../../config/sweetalert/swal";
import jobBoardLogo from "../../../images/jobBoardLogo.png";

const PostJobForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [, dispatch] = useEmployerState();
  const history = useHistory();

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  const initialState = {
    category: null,
    subCategory: null,
    title: "",
    designation: "",
    type: "Full-Time",
    qualification: "",
    experience: "",
    salary: "",
    languages: "",
    skills: "",
    companyName: "",
    description: "",
    companyLogo: null,
    location: {
      street: "",
      city: "",
      district: "",
      state: "",
      country: "",
      pinNumber: "",
    },
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();

    formData.append("companyName", state.companyName);
    formData.append("location", JSON.stringify(state.location));
    formData.append("companyLogo", state.companyLogo, state.companyLogo.name);
    formData.append("category", state.category);
    formData.append("subCategory", state.subCategory);
    formData.append("title", state.title);
    formData.append("designation", state.designation);
    formData.append("type", state.type);
    formData.append("qualification", state.qualification);
    formData.append("experience", state.experience);
    formData.append("salary", state.salary);
    formData.append("languages", state.languages);
    formData.append("skills", state.skills);
    formData.append("description", state.description);
    formData.append("createdAt", moment().valueOf());

    employerInstance
      .post("/jobs/post", formData)
      .then(({ data }) => {
        if (data.id) {
          LoaderToast.fire({
            title: "Redirecting to payment gateway.",
          });
          openRazorpay(data);
        } else {
          Toast.fire({
            title: "Something went wrong, Please try again",
            icon: "error",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        reject(false);
      };
      document.body.appendChild(script);
    });
  };

  const openRazorpay = (order) => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
      .then((response) => {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
          amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: order.currency,
          name: "JobBoard",
          description: "Secure Payments",
          image: jobBoardLogo,
          order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: function (response) {
            verifyPayment(response, order);
          },
          modal: {
            ondismiss: function () {
              employerInstance
                .delete(`/jobs/delete/${order.receipt}`)
                .then(({ data: job }) => {
                  Axios.delete(`/file/${job.companyLogo.id}`)
                    .then((response) => {
                      if (response.status) {
                        dispatch({
                          type: employerActionTypes.DELETE_JOB,
                          id: order.receipt,
                        });
                        Toast.fire({
                          title: "Payment Cancelled",
                          icon: "success",
                        });
                        history.push("/employer/job-management");
                      }
                    })
                    .catch((error) => {
                      Toast.fire({
                        title: "Something went wrong, Please try again",
                        icon: "error",
                      });
                      setIsLoading(false);
                    });
                })
                .catch((error) => {
                  Toast.fire({
                    title: "Something went wrong, Please try again",
                    icon: "error",
                  });
                  setIsLoading(false);
                });
            },
          },
          prefill: {
            name: "Vishnu C Prasad",
            email: "vishnucprasad@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "JobBoard PVT.Ltd",
          },
          theme: {
            color: "#007bff",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      })
      .catch((error) => {
        Toast.fire({
          title: "Razorpay SDK failed to load. Are you online?",
          icon: "error",
        });
        return;
      });
  };

  const verifyPayment = (payment, order) => {
    LoaderToast.fire({
      title: "Processing your payment. Please wait.",
    });

    employerInstance
      .post("/job/payment/verify", { payment, order })
      .then(({ data }) => {
        console.log("job", data);
        if (data.paymentStatus === "paid") {
          Toast.fire({
            title: "Job Posted Successfully",
            icon: "success",
          });
          dispatch({
            type: employerActionTypes.POST_JOB,
            job: data,
          });
          history.push("/employer/job-management");
          setIsLoading(false);
        } else {
          Toast.fire({
            title: "Something went wrong, Please try again",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        Toast.fire({
          title: "Something went wrong, Please try again",
          icon: "error",
        });
      });
  };

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-body rounded m-3 px-3 pt-3 pb-0">
          <form onSubmit={handleSubmit} className="postJobForm mt-4">
            <CompanyDetailsInputs state={state} setState={setState} />
            <JobDetailsInputs state={state} setState={setState} />
            {isLoading ? (
              <Loader />
            ) : (
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-7">
                  Save
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobForm;
