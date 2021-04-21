import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userType";
const axios = require("axios");
const https = require("https");

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// This is an action created. The difference between this action creator from the one define above is this returns a function wheresas others return objects
// This is possible because of thunk middleware. This function doesn't have to be pure. It is allowed to have side effects such as async API calls.
// This function also receives dispatch method as its argument
const agent = new https.Agent({
  rejectUnauthorized: false,
});

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users", { httpsAgent: agent })
      .then((response) => {
        //response.data

        const users = response.data;
        console.log("RESPONSE.DATA", users);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        //error.message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
