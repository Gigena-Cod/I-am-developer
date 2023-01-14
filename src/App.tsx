import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header.component";
import AboutView from "./views/About/About.view";
import ProjectsView from "./views/Projects/Projects.view";
import ContactView from "./views/Contact/Contact.view";
import HomeView from "./views/Home/Home.view";
import ExperienceView from "./views/Experience/Experience.view";


function App() {
  return (
    <div className="App">
      <div className=" p-4 body container__body">
        <Router>
          <HeaderComponent />
            <Routes>
              <Route index element={<HomeView />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/experience" element={<ExperienceView />} />
              <Route path="/projects" element={<ProjectsView />} />
              <Route path="/contact" element={<ContactView />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
