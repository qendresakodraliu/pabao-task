import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import SingleServicePage from './pages/SingleServicePage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ServicesPage/>} />
      <Route path="/pages" element={<SingleServicePage />} />
      </Routes>
  </Router>
  );
}

export default App;
