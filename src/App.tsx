import React, { useEffect } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import {db} from "./mockDb";

function App() {

  const data = db;

  return (
    <div className="App">
      <Dropdown data={data} />
    </div>
  );
}

export default App;
