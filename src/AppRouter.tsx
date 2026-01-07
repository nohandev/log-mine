import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Thanks from '@/pages/Thanks'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/thanks' element={<Thanks/>} />
      </Routes>
    </BrowserRouter>
  )
}