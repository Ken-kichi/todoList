import React from "react";
import "./App.css";
import Display from "./components/display";
import Form from "./components/form";

function App() {
  return (
    <div>
      <h2>Todoリスト</h2>
      <Display />
      <Form />
    </div>
  );
}

export default App;
