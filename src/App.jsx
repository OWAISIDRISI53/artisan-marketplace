import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Account from "./pages/Account";
import AboutPage from "./pages/About";
import ChatBot from "./pages/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/products" Component={Products} />
        <Route path="/pricing" Component={Pricing} />
        <Route path="/contact" Component={Contact} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" Component={Cart} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chat" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
