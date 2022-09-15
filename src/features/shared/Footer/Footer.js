import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Add } from "../../../assets/svg/add.svg";
import { ReactComponent as Menu } from "../../../assets/svg/add.svg";

import { GlobalContext } from "../../../state/context";
import { Container } from "./styles";

const PageFooter: React.FC<{}> = ({}) => {
  const {
    tasks: {
      state: { allTasks },
    },
    global: {
      state: { name },
    },
  } = useContext(GlobalContext);
  const history = useHistory();
  const navigateToAdd = () => {
    history.push("/add");
  };
  if (!name) return null;
  return (
    <Container>
      <Add onClick={navigateToAdd} />
    </Container>
  );
};
export default PageFooter;
