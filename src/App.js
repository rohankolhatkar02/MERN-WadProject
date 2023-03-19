
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
return(
  <Router >
  <div>
    <Routes>
      <Route element={<Home />} path="/home" />
      <Route element={<Login />} path="/login" /> 
      <Route element={<Signup />} path="/signup" /> 
    </Routes>
  </div>
  </Router>
);
}

export default App;
