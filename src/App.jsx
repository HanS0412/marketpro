import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProductComponent from './components/ProductComponent'
import SideBarLayout from './Layouts/SideBarLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginPage></LoginPage>}></Route>
      <Route path='/product' element={<ProductComponent></ProductComponent>}></Route>
      <Route path='/dashboard' element={<SideBarLayout></SideBarLayout>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
