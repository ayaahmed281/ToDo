export const globalDefaultState = {
  name: "",
};

export const globalReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "setUserName": {
      return { ...state, name: value };
    }
    default: {
      return { ...state };
    }
  }
};
