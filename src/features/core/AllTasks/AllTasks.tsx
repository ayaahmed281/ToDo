import React, { useContext } from "react";
import TaskCategoryDescription from "../../shared/TaskCategoryDescription/TaskCategoryDescription";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../../state/context";



const AllTasks: React.FC = () => {

  const {
    tasks: {
      state: {  allTasks },
      dispatch,
    },
  } = useContext(GlobalContext);
  const history = useHistory();
const groupBy = (allTasks:[]) => allTasks.reduce(
  (result, item) => ({
    ...result,
    [item['category']]: [
      ...(result[item['category']] || []),
      item,
    ],
  }), 
  {},
);
var arr = []
const groupdtask:any= groupBy(allTasks);
console.log(groupdtask)
for (const property in groupdtask) {
  const length = groupdtask[property].length
  arr.push({name:property,length,categoryID: groupdtask[property][0].categoryID})
}
console.log(arr)
  const navigateTOCategory = (categoryID:string) => {
    const tasks = allTasks.filter(
      (task:any) => task.categoryID === categoryID
    );
    dispatch({ type: "setTasksPerCategory", value: tasks });
    history.push(`${"/task/" + categoryID}`);
  };

 

  return (
    <section>
    {arr.map((selector, i) => {
      return (
        <div
          key={i}
          onClick={() => {
            navigateTOCategory(selector.categoryID);
          }}
        >
          <TaskCategoryDescription
            categoryName={selector.name}
            totalTaskRemaining={selector.length}
            showArrow={true}
          />
        </div>
      );
    })}
  </section>
  );
};

export default AllTasks;
