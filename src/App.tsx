import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const Projects = lazy(() => import('./Components/Projects'));
const ProjectDetail = lazy(() => import('./Components/ProjectDetails'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<NotFound />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
