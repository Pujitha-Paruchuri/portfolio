import { Routes, Route } from 'react-router'
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import About from './components/about';

function App() {
  return (

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  );
}

export default App
