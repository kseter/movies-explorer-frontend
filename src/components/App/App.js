import '../App/App.js';
import '../App/App.css'
import { Routes, Route } from 'react-router-dom';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Error from '../Error/Error.js';
import MainRoutes from '../MainRoutes/MainRoutes.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          path='/signup'
          element={<Register />}/>
          <Route path='/signin'
          element={<Login />}/>
          <Route path='/404'
          element={<Error />}/>
      </Routes>
      <MainRoutes />
    </div>
  );
}

export default App;

