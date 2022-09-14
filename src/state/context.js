import { createContext, useReducer } from "react";

import merge from "lodash/merge";

import { globalReducer, globalDefaultState } from "./globalReducer";
import { taskReducer, tasksDefaultState } from "./tasksReducer";

export const GlobalContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const initStateGlobal = merge({}, globalDefaultState);

  const [taskCurrentState, taskDispatch] = useReducer(
    taskReducer,
    tasksDefaultState
  );

  const [globalCurrentState, globalDispatch] = useReducer(
    globalReducer,
    initStateGlobal
  );

  return (
    <GlobalContext.Provider
      value={{
        tasks: {
          state: taskCurrentState,
          dispatch: taskDispatch,
        },
        global: {
          state: globalCurrentState,
          dispatch: globalDispatch,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
