import AppRoute from "./AppRoute";
import { AxiosInterceptor } from "./Axios.interceptor";
import Layout from "./layout/Layout";
import { GlobalStateProvider } from "./state/context";

const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <AxiosInterceptor>
    <Layout>
      <AppRoute />
    </Layout>
    </AxiosInterceptor>
    </GlobalStateProvider>
  );
};

export default App;
