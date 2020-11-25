const initialState = {
  value: "LOGIN"
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...state,
        value: "LOGIN"
      };

      case 'LOGIN' :
        return {
          ...state.value,
          value:"LOGOUT"
        }
    default:
      return state;
  }
};

export default appReducer;
