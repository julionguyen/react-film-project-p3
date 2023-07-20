import { Route, Routes } from 'react-router-dom';
import FilmLibrary from './FilmLibrary';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import "./App.css"
import FilmDetail from './FilmDetail';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/films' element={<FilmLibrary/>}>
          <Route path=':filmID' element={<FilmDetail />} />
        </Route>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </div>
    
  );
}

export default App;
