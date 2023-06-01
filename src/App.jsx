import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/home';
import Edit from './pages/Edit';
import { Route, Routes } from 'react-router-dom';
import ModifyContextProvider from './context/modifyContext';

function App() {

  return (
    <ModifyContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Edit' element={<Edit />} />
      </Routes>
    </ModifyContextProvider>
  )
}

export default App
