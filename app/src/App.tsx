import { useLenis } from './hooks/useLenis';
import { HashRouter, Navigate, Route, Routes } from 'react-router';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Training from './pages/Training';
import LanguageCourses from './pages/LanguageCourses';
import CourseDetail from './pages/CourseDetail';
import Team from './pages/Team';
import Materials from './pages/Materials';
import About from './pages/About';
import Assessment from './pages/Assessment';

function App() {
  useLenis();

  return (
    <HashRouter>
      <div className="relative">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:languageId" element={<LanguageCourses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/about" element={<About />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
