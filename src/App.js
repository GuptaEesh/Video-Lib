import "./App.css";
import { DataProvider } from "./helpers/data-context";
import { Home, Login, SignUp } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </DataProvider>
      </Router>
    </div>
  );
}

export default App;
