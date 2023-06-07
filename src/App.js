import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './container/Home';
import AdminPage from './container/Admin';
import ErrorPage from './container/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/admin" element={<AdminPage />}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
