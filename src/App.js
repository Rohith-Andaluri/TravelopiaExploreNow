import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home  from './components/Home'
import AdminPage from './components/AdminPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/admin' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App