import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ForgetPass from "./screens/ForgetPass.js";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/"element={<ForgetPass/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
