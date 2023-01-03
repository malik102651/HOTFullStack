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
import Register from './Pages/Register/Register';


function App() {
  const userLogin = useSelector(state => state.userLogin)
  const [authentication, setAuthState] = useState({
    authenticated: false,
    loading: true,
  })
  const userToken = localStorage.getItem('UserToken')
  console.log(userToken)
  const checkUser = () => {
    if (userToken) {
      //console.log("signin")
      setAuthState({
        ...authentication,
        authenticated: true,
        loading: false,
      })
    } else {
      //console.log("logout")
      setAuthState({
        ...authentication,
        authenticated: false,
        loading: false,
      })
    }
  }
  useEffect(() => {
    if (userToken) {
      checkUser()
    } else {
      setAuthState({
        ...authentication,
        authenticated: false,
        loading: false,
      })
    }

  }, [userToken])
  if (authentication.loading) {
    return (
      <Loading />
    )
  }
  
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<HomeRoute auth={authentication.authenticated}><Home /></HomeRoute>} />
          <Route path='/login' element={<PublicRoute auth={authentication.authenticated}><Login /></PublicRoute>} />
          <Route path='/register' element={<PublicRoute auth={authentication.authenticated}><Register /></PublicRoute>} />
          <Route path='/schedule' element={<HomeRoute auth={authentication.authenticated}><Schedule /></HomeRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
