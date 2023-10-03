import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../Store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link,useHistory } from 'react-router-dom';

function Login() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const { firebase } = useContext(FirebaseContext)
const history=useHistory()
const handleLogin=(e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{history.push('/')})
  .catch((error)=>{
    alert(error.message)
  })
   
}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="285px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        {/* <a>Signup</a> */}
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
