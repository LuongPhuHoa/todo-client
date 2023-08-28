import { deleteCookie, setCookie } from 'cookies-next';
import { authenticate, deAuthenticate, restoreAuthState } from './authSlice';
import { createAppAsyncThunk } from '../../createAppAsyncThunk';
import axios from 'axios';

// export const loginUser = (user: {}) => async (dispatch: any) => {
//   dispatch(authenticate(user));
// };

// export const logoutUser = () => async (dispatch: any) => {
//   deleteCookie('token');
//   dispatch(deAuthenticate());
// };

// export const checkLogin = (user: {}) => async (dispatch: any) => {
//   dispatch(restoreAuthState(user));
// };

export const loginUser = createAppAsyncThunk('auth/login', async (user: { email: any, password: any }) => {
  const { data } = await axios.post('/api/auth/signin', {
    email: user.email,
    password: user.password,
  });

  if (data.error) {
    alert(data.error);
  } else {
    setCookie("token", data.token);
    setCookie("name", data.name);
    setCookie("email", data.email);
    setCookie("id", data.id);
  }
  return data;
});

export const logoutUser = createAppAsyncThunk('auth/logout', async () => {
  deleteCookie('token');
});
