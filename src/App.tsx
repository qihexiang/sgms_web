import { Route, Routes } from 'react-router-dom'
import './App.css'
import ShowButton from './components/firstpage'
import Managing from './views/Manage'

function App() {
    return(
        <div className='function-area'>
           <Routes>
        <Route path="/" element={<ShowButton></ShowButton>} />
        <Route path="/manage" element={<Managing></Managing>} />
      </Routes>
    </div>
    )
}

export default App
