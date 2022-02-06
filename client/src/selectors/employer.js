import moment from "moment";

const matchFilters = (
  request,
  { startDate, endDate, search, category, subCategory, status }
) => {
  const createdAtMoment = moment(parseInt(request.createdAt));
  const statusMatch = request.status === status;
  const startDateMatch = startDate
    ? startDate.isSameOrBefore(createdAtMoment, "day")
    : true;
  const endDateMatch = endDate
    ? endDate.isSameOrAfter(createdAtMoment, "day")
    : true;
  const searchMatch =
    request.name.toLowerCase().includes(search.toLowerCase()) ||
    request.jobDetails.title.toLowerCase().includes(search.toLowerCase()) ||
    request.location.street.toLowerCase().includes(search.toLowerCase()) ||
    request.location.city.toLowerCase().includes(search.toLowerCase()) ||
    request.location.district.toLowerCase().includes(search.toLowerCase()) ||
    request.location.state.toLowerCase().includes(search.toLowerCase()) ||
    request.location.country.toLowerCase().includes(search.toLowerCase());

  const categoryMatch = request.jobDetails.category
    .toLowerCase()
    .includes(category.toLowerCase());
  const subCategoryMatch = request.jobDetails.subCategory
    .toLowerCase()
    .includes(subCategory.toLowerCase());

  return {
    statusMatch,
    startDateMatch,
    endDateMatch,
    searchMatch,
    categoryMatch,
    subCategoryMatch,
  };
};

export const appliedRequests = (requests, filters) => {
  return requests
    .filter((request) => {
      const {
        statusMatch,
        startDateMatch,
        endDateMatch,
        searchMatch,
        categoryMatch,
        subCategoryMatch,
      } = matchFilters(request, { ...filters, status: "Applied" });

      return (
        statusMatch &&
        startDateMatch &&
        endDateMatch &&
        searchMatch &&
        categoryMatch &&
        subCategoryMatch
      );
    })
    .sort((a, b) => {
      if (filters.sort === "Date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (filters.sort === "Salary") {
        return a.jobDetails.salary < b.jobDetails.salary ? 1 : -1;
      } else {
        return a;
      }
    });
};

export const approvedRequests = (requests, filters) => {
  return requests
    .filter((request) => {
      const {
        statusMatch,
        startDateMatch,
        endDateMatch,
        searchMatch,
        categoryMatch,
        subCategoryMatch,
      } = matchFilters(request, { ...filters, status: "Approved" });

      return (
        statusMatch &&
        startDateMatch &&
        endDateMatch &&
        searchMatch &&
        categoryMatch &&
        subCategoryMatch
      );
    })
    .sort((a, b) => {
      if (filters.sort === "Date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (filters.sort === "Salary") {
        return a.jobDetails.salary < b.jobDetails.salary ? 1 : -1;
      } else {
        return a;
      }
    });
};

export const rejectedRequests = (requests, filters) => {
  return requests
    .filter((request) => {
      const {
        statusMatch,
        startDateMatch,
        endDateMatch,
        searchMatch,
        categoryMatch,
        subCategoryMatch,
      } = matchFilters(request, { ...filters, status: "Rejected" });

      return (
        statusMatch &&
        startDateMatch &&
        endDateMatch &&
        searchMatch &&
        categoryMatch &&
        subCategoryMatch
      );
    })
    .sort((a, b) => {
      if (filters.sort === "Date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (filters.sort === "Salary") {
        return a.jobDetails.salary < b.jobDetails.salary ? 1 : -1;
      } else {
        return a;
      }
    });
};

export const appointedRequests = (requests, filters) => {
  return requests
    .filter((request) => {
      const {
        statusMatch,
        startDateMatch,
        endDateMatch,
        searchMatch,
        categoryMatch,
        subCategoryMatch,
      } = matchFilters(request, { ...filters, status: "Appointed" });

      return (
        statusMatch &&
        startDateMatch &&
        endDateMatch &&
        searchMatch &&
        categoryMatch &&
        subCategoryMatch
      );
    })
    .sort((a, b) => {
      if (filters.sort === "Date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (filters.sort === "Salary") {
        return a.jobDetails.salary < b.jobDetails.salary ? 1 : -1;
      } else {
        return a;
      }
    });
};
