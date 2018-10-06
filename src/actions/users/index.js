import fire from "../../config/fire";

export const requestLogin = () => ({ type: "REQUEST_LOGIN" });
export const requestLogout = () => ({ type: "REQUEST_LOGOUT" });
export const userLogin = (email, password) => dispatch => {
  dispatch(requestLogin());
  return fire.auth().signInWithEmailAndPassword(email, password);
};

export const userLogout = () => dispatch => {
  dispatch(requestLogout());
  return fire.auth().signOut();
};
