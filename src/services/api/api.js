import Expo from "expo";
import { JSON_HEADERS } from "./constants";
import {
  HOME_URL,
  REST_API_LOGIN_URL,
  REST_API_MOBILE_SIGNUP_URL
} from "./urls";
import { AsyncStorage } from "react-native";

const LogAuthorized = async () => {
  // A simple debugger as you grok Async
  const value = await AsyncStorage.getItem("token");
};

export const login = (username, password) => {
  let credentials = {
    username: username,
    password: password
  };

  fetch(HOME_URL + REST_API_LOGIN_URL, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(credentials)
  })
    .then(response => {
      return response.json();
    })
    .then(async responseData => {
      if ("key" in responseData) {
        return await AsyncStorage.setItem("token", responseData["key"]);
      }
    })
    .catch(error => {
      alert("Network Issue Encountered" + error);
    });
};

export const signupAPI = signUpParams => {
  fetch(HOME_URL + REST_API_MOBILE_SIGNUP_URL, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(signUpParams)
  })
    .then(response => {
      return response.json();
    })
    .then(async responseData => {
      if ("key" in responseData) {
        await AsyncStorage.setItem("token", responseData["key"]);
      }
    });
};
