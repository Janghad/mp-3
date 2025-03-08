import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import WorkExperience from './pages/WorkExperience';

function Root() {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/contact`} element={<Contact />} />
      <Route path={`/projects`} element={<Projects />} />
      <Route path={`/skills`} element={<Skills />} />
      <Route path={`/education`} element={<Education />} />
      <Route path={`/experience`} element={<WorkExperience />} />
    </Routes>
  );
}

const router = createBrowserRouter(
  [
    {path: "*", Component: Root }
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;