import { useContext, useEffect } from "react";

import axios from "axios";
import { GlobalContext } from "./state/context";


const AxiosInterceptor : React.FC<{ children: any }> = (props)=> {
  const {
    global: {
      state: { name },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    const resInterceptor = (response :any) => {
      console.log(response)
      return response;
    };
    const errInterceptor = async (error:any) => {
      try {
      console.log(error)

        // do error handling
        return Promise.reject(error);
      } catch (err) {
        return Promise.reject(error);
      }
    };

    const interceptor = axios?.interceptors?.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => axios?.interceptors?.response?.eject(interceptor);
  }, []);
  return <>{props.children}</>;
};

export { AxiosInterceptor };
