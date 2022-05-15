import './App.css'
import Login from './components/Login'
import Community from './components/Community'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Modal from './utlity/Modal'


function App() {
    return (
        <BrowserRouter>
            <Modal />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='community' element={<Community />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
