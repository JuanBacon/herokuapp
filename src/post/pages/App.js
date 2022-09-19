import Login from '../components/Login'
import Register from '../components/Register';
import Home from '../pages/Home'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import { ProvideAuth } from '../hook/useAuth';
import { PrivateRoute } from '../routes/PrivateRoute';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Routes>
        <Route
            path="*"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </ProvideAuth>
  );
}

export default App;
