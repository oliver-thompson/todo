import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Todos from "./views/Todos/Todos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
}

export default App;
