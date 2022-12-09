import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainHome from "./components/MainHomeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPageComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainHome />} path="/" />
          <Route element={<SearchPage />} path="/search" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
