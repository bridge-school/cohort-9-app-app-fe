const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? ""
    : `https://cohort-9-app-app-backend.herokuapp.com/`;

export const request = (endpoint, method = "GET", body) =>
  fetch(`${API_BASE_URL}/${endpoint}`, {
    method,
    headers: {
      "content-type": "application/json",
      method,
      body
    }
  });
