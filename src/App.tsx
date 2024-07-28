// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Projects from './Components/Projects';
import ProjectDetail from './Components/ProjectDetails';
import Test from './Pages/Test';
import EventPropagation from './Pages/EventPropagation';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<NotFound />} />
      <Route path="/projects"  element={<Projects/>} />
      <Route path="/projects/:projectId" element={<ProjectDetail/>} /> {/* Dynamic route for project details */}
      <Route path="/test"  element={<Test/>} />
      <Route path="/eventPropagation"  element={<EventPropagation/>} />
      </Routes>
    </Router>
  );
};

export default App;
