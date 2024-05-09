import "./App.css";

import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeMode";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={isDark ? "App-dark" : "App-light"}>
      <div className="container">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/edit-blog" element={<EditBlog />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
