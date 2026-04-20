import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PatientManagerPage from './pages/PatientManagerPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projetos/patient-manager" element={<PatientManagerPage />} />
    </Routes>
  )
}

export default App
