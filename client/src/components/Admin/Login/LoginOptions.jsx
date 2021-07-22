import React from "react";
import { useHistory } from "react-router-dom";

const LoginOptions = () => {
  const history = useHistory();

  const handleGoogleAuth = () => {
    const googleAuthURL = `${process.env.REACT_APP_ADMIN_BASE_URL}/auth/google`;

    const width = 480;
    const height = 620;
    const left = Math.round(window.screenX + (window.outerWidth - width) / 2);
    const top = Math.round(
      window.screenY + (window.outerHeight - height) / 2.5
    );

    const loginWindow = window.open(
      googleAuthURL,
      "_blank",
      `width=${width}, height=${height}, left=${left}, top=${top}`
    );

    if (loginWindow) {
      const timer = setInterval(() => {
        if (loginWindow.closed) {
          history.push("/admin/dashboard");
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  return (
    <div>
      <div className="mt-3 mb-4 text-center">
        <span className="font-weight-normal">or login with</span>
      </div>
      <div className="btn-wrapper my-4 text-center">
        <button
          className="btn btn-primary btn-icon text-twitter mr-2 px-5"
          type="button"
          title="Sign in with google"
          onClick={handleGoogleAuth}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoginOptions;
