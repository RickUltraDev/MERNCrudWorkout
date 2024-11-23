// Imports general
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

//Lazy loading page refs
const Homepage = lazy(() => import('./components/HomePage'));

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="App">
        <Navbar />
        <div className="pages">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  )
}

export default App;
