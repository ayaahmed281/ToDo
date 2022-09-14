import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/svg/person.svg";
import { ReactComponent as Menu } from "../../../assets/svg/arrow-left.svg";
import styles from "./Header.module.css";

import { GlobalContext } from "../../../state/context";
import { Header } from "./styles";

const PageHeader: React.FC<{}> = ({}) => {
  const {
    tasks: {
      state: {  allTasks },
    },
    global: {
      state: {  name },
    },
  } = useContext(GlobalContext);
  const history = useHistory();
  const back =()=>{
    history.goBack()
  }
  if (!name) return null;
  return (
    <>
    <div className={styles.burgerMenu}  onClick={back}><Menu/> </div>
    <Header>
    <div className={"logo"}>
    </div>
    <div className='desc'>
          <b>Hello {name}</b>
          <span> u have Today {allTasks.length} task</span>
        </div>
      <Logo />

  </Header>
  </>
  );
};
export default PageHeader;

