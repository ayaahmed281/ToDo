export const tasksDefaultState = {
  tasksPerCategory: [],
  allTasks: [],
  categoryGroups: [],
  selectedCategoryName: "",
};

export const taskReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "setAllTasks": {
      return {
        ...state,
        allTasks: value,
      };
    }
    case "setTasksPerCategory": {
      return {
        ...state,
        tasksPerCategory: value,
      };
    }
    case "setCategoryGroups": {
      return {
        ...state,
        categoryGroups: value,
      };
    }
    case "setSelectedCategoryName": {
      return {
        ...state,
        selectedCategoryName: value,
      };
    }

    default: {
      return { ...state };
    }
  }
};
