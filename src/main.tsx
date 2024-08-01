import { Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import MenuBar from './Components/MenuBar';
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/MenuBar' element={<MenuBar />} />
    </Routes>
  </BrowserRouter>
)
