import AppRoute from "./AppRoute";
import Layout from "./layout/Layout";
import { GlobalStateProvider } from "./state/context";

const App: React.FC = () => {
  return (
    <GlobalStateProvider>
    <Layout>
      <AppRoute />
    </Layout>
    </GlobalStateProvider>
  );
};

export default App;
