import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Content } from "./Layout.styles.js";
import PageHeader from "../features/shared/Header/Header";
import PageFooter from "../features/shared/Footer/Footer";
import { useContext } from "react";

import { GlobalContext } from "../state/context";
import { useHistory } from "react-router-dom";

const Layout: React.FC<{ children: any }> = (props) => {
  const history = useHistory();
  const {
    global: {
      state: { name },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (!name) history.push(`/`);
  }, []);

  const { children } = props;
  return (
    <Container>
      <PageHeader />
      <Content>
      {children}
      </Content>
      <PageFooter />
    </Container>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
