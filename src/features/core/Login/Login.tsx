import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "../../../components/Spinner/Spinner";
import getAllTasks from "../../../services/get/getAllTasks/getAllTasks";
import postAuthToken from "../../../services/post/postAuthToken/postAuthToken";
import { GlobalContext } from "../../../state/context";

import "./Login.css";

function Login() {
  const {
    global: { dispatch,state:{
      loading
    } },
    tasks: { dispatch: taskDispatch },
  } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    taskDispatch({
      type: "setAllTasks",
      value: [],
    });
    dispatch({
      type: "setUserName",
      value: "",
    });
  }, []);

  const startOrganize = async () => {
    try {
      dispatch({type:"setLoaderVisibility", value:true})
      const data = await postAuthToken();

      const alltaskByUser = await getAllTasks();
      dispatch({
        type: "setUserName",
        value: data?.credentials?.name,
      });
      taskDispatch({
        type: "setAllTasks",
        value: alltaskByUser,
      });
      history.push(`${"/tasks"}`);
      dispatch({type:"setLoaderVisibility", value:false})

    } catch (err) {
      console.log(err);
      dispatch({type:"setLoaderVisibility", value:true})

    }
  };
  return (
    <div className="app">
     {loading && <Spinner/>}
      <div>
        <figure>
          <img src={require("../../../assets/images/start.png")} />
          <h2>Get organized your list</h2>
          <figcaption>
            Uni is simple and effective to-do list abd task manger app which
            helps you manage time
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
