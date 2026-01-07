import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Feedback from '@/pages/FeedBack'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  )
}