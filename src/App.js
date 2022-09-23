import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TextPage from './components/TextPage';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path='/text-io' element={<HomePage />} />
      <Route path='/text-io/text' element={<TextPage />} />
    </Routes>
  );
}

export default App;
