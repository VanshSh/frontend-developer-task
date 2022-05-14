import './App.css'
import Login from './Components/Login'
import Community from './Components/Community'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='community' element={<Community />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
