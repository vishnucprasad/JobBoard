export const appliedRequests = (requests) => {
  return requests.filter((request) => request.status === "Applied");
};

export const approvedRequests = (requests) => {
  return requests.filter((request) => request.status === "Approved");
};
