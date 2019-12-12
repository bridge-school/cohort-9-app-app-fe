export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? ""
    : `https://cohort-9-app-app-backend.herokuapp.com`;

export const request = (endpoint, method = "GET", data = {}) =>
  fetch(`${API_BASE_URL}/${endpoint}`, {
    method,
    headers: {
      "content-type": "application/json"
    }
  });

export const requestWithParam = (endpoint, params) => {
  const paramsString = params.reduce((acc, curr) => {
    const key = Object.keys(curr)[0];
    if (acc === "") {
      return `${key}=${curr[key]}`;
    }
    return `${acc}&${key}=${curr[key]}`;
  }, "");

  const newEndPonit = `${endpoint}?${paramsString}`;
  return request(newEndPonit);
};
