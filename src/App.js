import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home.js";
import MainContainer from "./components/Main.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoreHome from "./components/store/Home.js";
import StoreLogin from "./components/store/Login.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import StoreProfile from "./components/store/Profile.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            path="store"
            element={
              <ProtectedRoute isAuthenticated={false}>
                <MainContainer />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<StoreHome />} />
            <Route path="profile" element={<StoreProfile />} />
          </Route>
          <Route path="store/login" element={<StoreLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
