export const tasksDefaultState = {
  selectedCategoryId: "1",
  tasksPerCategory: [],
  allTasks: [],
};

export const taskReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "setSelectedCategoryId": {
      console.log(value);

      return {
        ...state,
        selectedCategoryId: value,
      };
    }

    case "setAllTasks": {
      console.log(value);
      return {
        ...state,
        allTasks: value,
      };
    }
    case "setTasksPerCategory": {
      console.log(value);

      return {
        ...state,
        tasksPerCategory: value,
      };
    }
    default: {
      return { ...state };
    }
  }
};
