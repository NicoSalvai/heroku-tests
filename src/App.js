import './App.css';
import React from 'react'
import Login from './components/login/Login';
import User from './components/user/User';
import useToken from './components/token/useToken';

function App() {
  const {userInfo, setUserInfo} = useToken();
  
  if(!userInfo) {
    return <Login setUserInfo={setUserInfo} />
  }
  return (
    <div className="App">
        <User userInfo={userInfo} setUserInfo={setUserInfo}/>
    </div>
  );
}

export default App;
