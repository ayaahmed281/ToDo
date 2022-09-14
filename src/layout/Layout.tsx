import React from "react";
import PropTypes from "prop-types";
import classes from "./Layout.module.css";
import PageHeader from "../features/shared/Header/Header";

const Layout: React.FC<{ children: any }> = props => {
  const { children } = props;
  return (
    <div className={classes.container}>
      <PageHeader/>


      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired
};
