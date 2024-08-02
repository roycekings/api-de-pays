
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
function App() {
  const routes = (
    <Router>
        <Routes>
            <Route path='/home' element={<Home />} />
        </Routes>
    </Router>
  )
    
  

  return (
    <>
      {routes}
    </>
  )
}

export default App
