import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ViewPost from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './Store/Context';
import Post from './Store/PostContext';
import Create from './Pages/Create'

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      {console.log(user,'eaGDYegayuGFBAWIHS');}
    })

  })
  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/view'>
            <ViewPost />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
