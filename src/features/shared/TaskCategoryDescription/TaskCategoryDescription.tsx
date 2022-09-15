import React from "react";
import styles from "./TaskCategoryDescription.module.css";
import { ReactComponent as ArrowIcon } from "../../../assets/svg/arrow-left.svg";
import { ReactComponent as TodayIcon } from "../../../assets/svg/sun.svg";
import { ReactComponent as PlannedCategory } from "../../../assets/svg/calender.svg";
import { ReactComponent as PersonalIcon } from "../../../assets/svg/person.svg";
import { ReactComponent as WorkIcon } from "../../../assets/svg/working.svg";
import { ReactComponent as shoppingIcon } from "../../../assets/svg/shopping.svg";
const imagesPath:any = {
    "Family": PersonalIcon,
    "Today":TodayIcon,
    "Planned":TodayIcon,
    'Work': WorkIcon,
    'Personal': PersonalIcon,
    'Shopping': shoppingIcon,
 
};


type TaskCategoryDescriptionProps = {
  categoryName: string,
  totalTaskRemaining:number,
  showArrow:Boolean,
}

const TaskCategoryDescription: React.FC<TaskCategoryDescriptionProps> = props => {
  const { categoryName, totalTaskRemaining, showArrow} = props;

  const Icon = imagesPath[categoryName];
  return (
    <div className={styles.panel}>
      <div className={styles.content}>
         <Icon  /> 
        <div className={styles.desc}>
          <b>{categoryName}</b>
          <span> u have {totalTaskRemaining} task</span>
        </div>
        {showArrow && <ArrowIcon className={styles.arrow} />}
      </div>
    </div>
  );
};
export default TaskCategoryDescription;
