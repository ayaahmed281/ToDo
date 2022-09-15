export const globalDefaultState = {
  name: "",
  loading: false,
};

export const globalReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "setUserName": {
      return { ...state, name: value };
    }
    case "setLoaderVisibility": {
      return { ...state, loading: value };
    }
    default: {
      return { ...state };
    }
  }
};
