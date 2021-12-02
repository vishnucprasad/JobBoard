export const appliedRequests = (requests) => {
  return requests.filter((request) => request.status === "Applied");
};
