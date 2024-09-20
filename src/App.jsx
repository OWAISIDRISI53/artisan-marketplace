import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/products" Component={Products} />
        <Route path="/pricing" Component={Pricing} />
        <Route path="https://artisan-marketplace.netlify.app/contact" Component={Contact} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </Router>
  );
}

export default App;
