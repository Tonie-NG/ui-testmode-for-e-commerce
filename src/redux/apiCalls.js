import { publicRequest } from "../apiCalls/request";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res);
  } catch (error) {
    dispatch(loginFailure());
    console.log("your mama");
  }
};
