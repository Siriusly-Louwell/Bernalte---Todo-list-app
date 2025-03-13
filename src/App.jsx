import React from "react";
import store from "./app/redux/store";
import { Provider } from 'react-redux';
import TodoForm from "./app/pages/TodoForm";

function App() {
  return (
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );
}

export default App;