import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Modal from './utlity/Modal'
import Home from './Page/Home'
import Posts from './Page/Posts'

function App() {
    return (
        <BrowserRouter>
            <Modal />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='community' element={<Posts />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
