import './App.css';
import Login from './Pages/Login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Schedule from './Components/Schedule/Schedule';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading';
import { PublicRoute } from './Routing/PublicRouting';
import { useSelector } from 'react-redux';
import { HomeRoute } from './Routing/PrivateRoutes';


function App() {
  const userLogin = useSelector(state => state.userLogin)
  const [authentication, setAuthState] = useState({
    authenticated: false,
    loading: true,
  })
  const passowrd = localStorage.getItem('password')
  const checkUser = () => {
    if (passowrd) {
      setAuthState({
        ...authentication,
        authenticated: true,
        loading: false,
      })
    } else {
      setAuthState({
        ...authentication,
        authenticated: false,
        loading: false,
      })
    }
  }
  useEffect(() => {
    checkUser()
  }, [passowrd])
  if (authentication.loading) {
    return (
      <Loading />
    )
  }
  console.log(authentication.authenticated)
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<HomeRoute auth={authentication.authenticated}><Home /></HomeRoute>} />
          <Route path='/login' element={<PublicRoute auth={authentication.authenticated}><Login /></PublicRoute>} />
          <Route path='/schedule' element={<Schedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
