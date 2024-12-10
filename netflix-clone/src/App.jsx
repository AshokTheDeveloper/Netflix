import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/player/:id" element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
