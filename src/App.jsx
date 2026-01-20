import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Pages/login/LoginPage.jsx";
import OrderPage from "./components/Pages/order/OrderPage.jsx";
import ErrorPage from "./components/Pages/error/ErrorPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
