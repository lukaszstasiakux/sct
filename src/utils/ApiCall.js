"use strict";
import axios from "axios";

export const ApiCall = (path, callback, errorCallback) => {
  return axios
    .get(`http://localhost:6010/articles/${path}`, {
      headers: {
        "Content-type": "Application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        callback(response.data.articles);
      }
    })
    .catch((error) => {
      errorCallback();
    });
};
