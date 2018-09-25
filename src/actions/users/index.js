import fire from '../../config/fire';


export const requestLogin = () => ({ type: 'REQUEST_LOGIN' });
export const userLogin = (email, password) => (dispatch) => {
  dispatch(requestLogin());
  return fire
    .auth()
    .signInWithEmailAndPassword(email, password);
};
