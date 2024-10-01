
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Home from "./components/pages/Home/Home";
import "./index.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
