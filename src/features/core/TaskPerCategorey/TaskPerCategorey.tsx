import { useContext, useEffect } from "react";
import { Task } from "../../../core/models/task-model";
import { GlobalContext } from "../../../state/context";
import TaskCategoryDescription from "../../shared/TaskCategoryDescription/TaskCategoryDescription";
import Input from "../../../components/input/input";
const TasksPerCategoryComponent: any = () => {
  const {
    tasks: {
      state: { tasksPerCategory, selectedCategoryName },
      dispatch,
    },
  } = useContext(GlobalContext);
  
  const onChangeToggleProvidedInfo = (task: Task) => {
    const indexNo: number = tasksPerCategory[selectedCategoryName].findIndex(
      (e: Task) => e.id === task.id
    );
    tasksPerCategory[selectedCategoryName][indexNo].status =
      !tasksPerCategory[selectedCategoryName][indexNo].status;
    dispatch({
      type: "setTasksPerCategory",
      value: tasksPerCategory,
    });
  };
  return (
    tasksPerCategory[selectedCategoryName] && (
      <>
        <TaskCategoryDescription
          categoryName={selectedCategoryName}
          totalTaskRemaining={3}
          showArrow={false}
        />
        {tasksPerCategory[selectedCategoryName] &&
          tasksPerCategory[selectedCategoryName].length &&
          tasksPerCategory[selectedCategoryName].map(
            (task: Task, i: number) => {
              return (
                <div key={i}>
                  <div>
                    <Input
                      id={i}
                      type="checkbox"
                      label={<span>{task.description}</span>}
                      checked={task.status}
                      onChange={() => {
                        onChangeToggleProvidedInfo(task);
                      }}
                    />
                  </div>
                </div>
              );
            }
          )}
      </>
    )
  );
};

export default TasksPerCategoryComponent;
