import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import getAllTasks from "../../../services/get/getAllTasks/getTaskByID";
import postAuthToken from "../../../services/post/postAuthToken/postAuthToken";
import { GlobalContext } from "../../../state/context";

import "./Login.css";

function Login() {
  const {
    global: {
      dispatch,
    },
    tasks:{
      dispatch: taskDispatch,
    }
  } = useContext(GlobalContext);
  const history = useHistory();
  dispatch({
    type: "setUserName",
    value: ''
  });
  // useEffect(() => {
  //   dispatch({
  //     type: "setUserName",
  //     value: ''
  //   });}, []);

  const startOrganize = async () => {
    try {
      const data = await postAuthToken();
      dispatch({
        type: "setUserName",
        value: data?.credentials?.name
      });
      const alltaskByUser = await getAllTasks();
      console.log(alltaskByUser)
      taskDispatch({
        type: "setAllTasks",
        value: alltaskByUser
      });
      history.push(`${'/tasks'}`);
    } catch (err) {
      console.log(err)
    }
  };
  return (<div className="app">
    <div>
      <figure>
        <img src={require('../../../assets/images/start.png')} />
        <h2>Get organized your list</h2>
        <figcaption>
          Uni is simple and effective to-do list abd task manger app which helps you manage time
        </figcaption>
      </figure>
    </div>
    <div className="button-container" onClick={startOrganize}>
      Start Organize
    </div>
  </div>
  );
}

export default Login;