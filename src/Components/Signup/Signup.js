import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import { useHistory, Link } from 'react-router-dom';
import './Signup.css';
import { FirebaseContext } from '../../Store/Context';

export default function Signup() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      result.user.updateProfile({ displayName: userName }).then(() => { })
      firebase.firestore().collection('user').add({
        id: result.user.uid,
        username: userName,
        phone: phone
      }).then(() => { history.push("/login") })

    })

  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="285px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="fname"
            name="name"
            required

          // defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fnames"
            name="email"
            required

          // defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            required

          // defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lnames"
            name="password"
            required
          // defaultValue="Doe"
          />
          <br />
          <br />
          <button >Signup</button>
        </form>
        {/* <a>Login</a> */}
        <Link to='/Login'>Login</Link>
      </div>
    </div>
  );
}
