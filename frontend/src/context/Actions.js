export const loginRequest = (userCredentials) => ({
  type: 'LOGIN_REQUEST',
});

export const loginCompleted = (user) => ({
  type: 'LOGIN_COMPLETED',
  payload: user,
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});

export const logout = () => ({
  type: 'LOGOUT',
});
