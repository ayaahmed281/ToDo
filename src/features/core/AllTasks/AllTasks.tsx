import React, { useContext, useEffect, useState } from "react";
import TaskCategoryDescription from "../../shared/TaskCategoryDescription/TaskCategoryDescription";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../../state/context";

const AllTasks: React.FC = () => {
  const {
    tasks: {
      state: {
        categoryGroups,
        allTasks,
        tasksPerCategory,
        selectedCategoryName,
      },
      dispatch,
    },
  } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    if (categoryGroups.length == 0) {
      const groupBy = (allTasks: []) =>
        allTasks.reduce(
          (result, item) => ({
            ...result,
            [item["category"]]: [...(result[item["category"]] || []), item],
          }),
          {}
        );
      const groupedTask = groupBy(allTasks);
      dispatch({ type: "setTasksPerCategory", value: groupedTask });
      const arr = [];
      for (const property in tasksPerCategory) {
        arr.push({
          name: property,
          length: tasksPerCategory[property].length,
          categoryID: tasksPerCategory[property][0].categoryID,
        });
      }
      dispatch({ type: "setCategoryGroups", value: arr });
    }
  }, [categoryGroups]);

  const navigateTOCategory = (categoryName: string) => {
    dispatch({
      type: "setSelectedCategoryName",
      value: categoryName,
    });
    history.push(`${"/task/" + categoryName}`);
  };

  return (
    <section>
      {categoryGroups.length &&
        categoryGroups.map((category: any, i: any) => {
          return (
            <div
              key={i}
              onClick={() => {
                navigateTOCategory(category.name);
              }}
            >
              <TaskCategoryDescription
                categoryName={category.name}
                totalTaskRemaining={category.length}
                showArrow={true}
              />
            </div>
          );
        })}
    </section>
  );
};

export default AllTasks;
