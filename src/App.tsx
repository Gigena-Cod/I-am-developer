import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const HeaderComponent = lazy(() => import("./components/Header.component"));
const Home = lazy(() => import("./views/Home/Home.component"));
const ContactComponent = lazy(
  () => import("./views/Contact/Contact.component")
);
const AboutComponent = lazy(() => import("./views/About/About.component"));
const ProjectsComponent = lazy(() => import("./views/Projects/Projects.component"));
const Loading = lazy(() => import("./components/loading/Loading"));

function App() {
  return (
    <div className="App">
      <div className=" p-8 body container__body">
        <Router>
          <HeaderComponent />
          <Suspense fallback={<Loading customClass={""} />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/projects" element={<ProjectsComponent />} />
              <Route path="/contact" element={<ContactComponent />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default App;
