import { useState } from "react";
import Item from "./types/Item";

const App = () => {
  const [list, setList] = useState([]);
  return (
    <div>
      <h1>to do list</h1>
    </div>
  );
};

export default App;
