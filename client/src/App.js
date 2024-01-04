import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
function App() {
  return (
  <> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/signin' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
