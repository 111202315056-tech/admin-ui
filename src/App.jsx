import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserCards from './pages/UserCards'
import Exercise from './Exercise'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Exercise />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usercards" element={<UserCards />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}