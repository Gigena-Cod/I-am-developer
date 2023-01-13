import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header.component";
import AboutComponent from "./views/About/About.component";
import ProjectsComponent from "./views/Projects/Projects.component";
import ContactComponent from "./views/Contact/Contact.component";
import HomeComponent from "./views/Home/Home.component";


function App() {
  return (
    <div className="App">
      <div className=" p-8 body container__body">
        <Router>
          <HeaderComponent />
            <Routes>
              <Route index element={<HomeComponent />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/projects" element={<ProjectsComponent />} />
              <Route path="/contact" element={<ContactComponent />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
