import { Dashboard } from "./Pages/Dashboard";
import { Homepage } from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
function App() {
  



  return (
    <>
    <Routes>
    <Route path="/" element= { <Homepage /> } />
    <Route path="/Dashboard" element= { <Dashboard /> } />
    </Routes>
    </>
  );
}

export default App;
