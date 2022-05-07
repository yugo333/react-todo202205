import { InputTodos } from "./components/InputTodos";
import { InCompleteTodos } from "./components/InCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <InputTodos />
      <InCompleteTodos />
      <CompleteTodos />
    </Layout>
  );
};

export default App;
