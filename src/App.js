import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Register from "./pages/Register/Register";
import New from "./pages/new/New";
import Typage from "./pages/neweventform/typage";
import Neweventform1 from "./pages/neweventform/Neweventform1";
import Neweventform2 from "./pages/neweventform/Neweventform2";
import Prequests from "./pages/pendingrequests/Prequests";
import Activerequests from "./pages/activerequests/activerequests";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Test from "./pages/Qrscanner/Qrscanner";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="dashboard" element={<Home />} />
            <Route index element={<Login />} />
            <Route path="newapplicationform" element={<Neweventform1 />} />
            <Route path="response" element={<Neweventform2 />} />
            <Route path="pendingrequests" element={<Prequests />} />
            <Route path="activerequests" element={<Activerequests />} />
            <Route path="typage" element={<Typage />} />
            <Route path="register" element={<Register />} />

            <Route path="qrscanner" element={<Test />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
