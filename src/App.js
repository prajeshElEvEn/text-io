import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TextPage from './components/TextPage';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/text' element={<TextPage />} />
    </Routes>
  );
}

export default App;
