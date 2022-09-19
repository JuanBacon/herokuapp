import Login from '../components/Login'
import Register from '../components/Register';
import Home from '../pages/Home'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import { ProvideAuth } from '../hook/useAuth';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </ProvideAuth>
  );
}

export default App;
