import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "@sweetalert2/theme-material-ui/material-ui.css";

const ReactSwal = withReactContent(Swal);

const MySwal = ReactSwal.mixin({
  customClass: {
    container: "swal-container",
    popup: "bg-primary shadow-soft",
    title: "swal-container__title",
    confirmButton: "btn btn-primary text-success swal-confirm mr-2",
    cancelButton: "btn btn-primary text-danger mr-2",
    loader: "custom-loader",
  },
  buttonsStyling: false,
  didOpen: () => {
    document.getElementsByClassName("swal-confirm")[0].blur();
  },
});

const Toast = MySwal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const LoaderToast = MySwal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  didOpen: () => {
    MySwal.showLoading();
  },
});

export { MySwal as default, Toast, LoaderToast };
