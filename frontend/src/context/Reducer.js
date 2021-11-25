const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        user: null,
        isFetching: true,
        error: null,
      };
    case 'LOGIN_COMPLETED':
      return {user: action.payload, isFetching: false, error: null};

    case 'LOGIN_FAILURE':
      return {user: null, isFetching: false, error: true};
      
    case 'LOGOUT':
      return {user: null, isFetching: false, error: null};

    default:
      return state;
  }
};

export default Reducer;
