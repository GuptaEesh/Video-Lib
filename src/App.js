import "./App.css";
import { DataProvider } from "./helpers/data-context";
import {
  HistoryList,
  Home,
  LikeList,
  ListingPage,
  Login,
  PlayList,
  SignUp,
  VideoScreen,
} from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";
import { ListProvider } from "./helpers/list-context";
import { Nav } from "./components";

function App() {
  const location = useLocation();
  const routeCheck =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";
  return (
    <div className="App">
      <DataProvider>
        <ListProvider>
          {!routeCheck && <Nav />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/videos" element={<ListingPage />} />
            <Route path="/videos/:id" element={<VideoScreen />} />
            <Route path="/likeList" element={<LikeList />} />
            <Route path="/history" element={<HistoryList />} />
            <Route path="/playlist" element={<PlayList />} />
          </Routes>
        </ListProvider>
      </DataProvider>
    </div>
  );
}

export default App;
