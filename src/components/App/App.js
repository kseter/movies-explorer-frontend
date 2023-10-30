import '../App/App.js';
import '../App/App.css'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Error from '../Error/Error.js';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi.js';
import  * as auth from '../../utils/auth'
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import Preloader from '../Preloader/Preloader.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isCheckToken, setIsCheckToken] = useState(true);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const [isError, setIsError] = useState(false)
  const {pathname} = useLocation();
  const navigate = useNavigate();


useEffect(() => {
  if(localStorage.jwt) {
    Promise.all([mainApi.getSavedMovies(localStorage.jwt), mainApi.getUserInfo(localStorage.jwt)])
    .then(([savedMovies, user]) => {
      const ownerMovies = savedMovies.filter(m => m.owner === user._id)
      setCurrentUser(user)
      setSavedMovies(ownerMovies.reverse())
      setLoggedIn(true);
      setIsCheckToken(false);
    })
  .catch((err) => {
    console.error(`Ошибка при загрузке данных ${err}`);
    setIsCheckToken(false);
    localStorage.clear()
  })
} else {
  setLoggedIn(false);
  setIsCheckToken(false)
  localStorage.clear()
}
}, [loggedIn])


function updateUserInfo(name, email) {
  mainApi.setUserInfo(name, email, localStorage.jwt)
  .then((data) => {
    setCurrentUser(data);
    setIsUpdateSuccess(true);
  })
  .catch((err) => {
    console.error(`Ошибка при редактировании данных пользователя ${err}`)
    setIsError(true)
})
}

function handleToggleMovie(movie) {
  const isSaved = savedMovies.some((m) => movie.id === m.movieId)
  const chosenMovie = savedMovies.filter((m) => {
    return m.movieId === movie.id
  })
  if(isSaved) {
    handleMovieDelete(chosenMovie[0]._id)
  } else {
    mainApi.saveMovie(movie, localStorage.jwt)
    .then((res) => {
      setSavedMovies([res, ...savedMovies])
    })
    .catch((err) => {
      console.error(`Ошибка при добавлении карточки ${err}`)
    })
  }
}


function handleMovieDelete(movieId){
  mainApi.deleteSavedMovie(movieId, localStorage.jwt)
  .then(() => {
    setSavedMovies((savedMovies) => savedMovies.filter((m) => { return m._id !== movieId}));
  })
  .catch((err) => {
    console.error(`Ошибка при удалении фильма ${err}`)
  })
}


function onLogin(email, password) {
  return auth.login(email, password)
  .then((res) => {
    if (res.token) {
      localStorage.setItem('jwt', res.token);
      setLoggedIn(true)
      navigate('/movies');
      window.scrollTo(0,0)
    }
  })
  .catch((err) => {
    console.error(`Ошибка авторизаци ${err}`)
  })
}

function onRegister(name, email, password) {
   return auth.register(name, email, password)
   .then((res) => {
    if(res) {
      setIsError(false)
      setLoggedIn(false);
      auth.login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true)
        navigate('/movies');
        window.scrollTo(0,0)
      })
      .catch((err) => {
        console.error(`Ошибка авторизаци при регистрации ${err}`)
      })
    }
   })
   .catch((err) => {
    console.error(`Ошибка при регистрации ${err}`)
    setIsError(true)
  })
}

function logOut() {
  localStorage.clear();
  setLoggedIn(false);
  navigate('/');
}

  return (
    <div className='page__container'>
      {isCheckToken ?  <Preloader /> :
        <CurrentUserContext.Provider value={currentUser}>
          <div className="App">
            <div className='App__container'>
              {(pathname === '/movies' || pathname === '/saved-movies' || 
              pathname === '/profile' || pathname === '/') 
              ? 
              <Header 
              loggedIn={loggedIn}/> 
              : ''
              }
              
            <Routes>
              
              <Route 
                path='/'
                element={<Main />}
              />

              <Route 
                path='/signup'
                element={ loggedIn ? <Navigate to='/movies' replace/>: <Register 
                onRegister={onRegister}
                isError={isError}/>}/>

                <Route path='/signin'
                element={loggedIn ? <Navigate to='/movies' replace/> : <Login 
                onLogin={onLogin}/>}/>

                <Route path='*'
                element={<Error />}/>

                <Route element={<ProtectedRoute
                loggedIn={loggedIn}/>}>
                  <Route path='/profile'
                  element={<Profile
                    user={currentUser}
                    onUpdateProfileInfo={updateUserInfo}
                    logOut={logOut}
                    isUpdateSuccess={isUpdateSuccess}
                    isError={isError}
                    />} exact/>
                </Route>

                <Route element={<ProtectedRoute
                loggedIn={loggedIn}/>}>
                  <Route path='/saved-movies'
                  element={<SavedMovies
                    savedMovies={savedMovies}
                    onDelete={handleMovieDelete}
                    />} exact/>
                </Route>


                <Route element={<ProtectedRoute
                loggedIn={loggedIn}/>}>

                  <Route path='/movies'
                  element={<Movies
                    isSaved={false}
                    savedMovies={savedMovies}
                    onAdd={handleToggleMovie}
                    />} exact/>
                </Route>

            </Routes>
            </div>
          </div>
          </CurrentUserContext.Provider>}
          </div>

  );
}

export default App;