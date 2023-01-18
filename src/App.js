import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";// views
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import FilteredFoods from "./views/FilteredFoods";
// components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

// styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Header Area */}
      <div className="max-w-full">
        <Header />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/Foods" element={<Foods />} />
        </Routes>
        <Routes>
          <Route path="/filteredfoods/:slug" element={<FilteredFoods />} />
        </Routes>
      {/* Footer Area */}
			<div className="max-w-full">
				<Footer />
			</div>
    </BrowserRouter>
  );
}

export default App;
