import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users,setUsers] = useState([])
  const handleAuthentication = () => {
    if(isRegister){
        //login
        if(isRegister){
            const user = users.find((u)=>u.email === email && u.password === password);
            if(user){
                setIsLoggedIn(true);
            }
            else{
                alert('login failed, please check the credentials')
            }
        }
    }else{
        //register
        const newUser = {email,password};
        setUsers([...users,newUser]);
        localStorage.setItem('users',JSON.stringify([...users,newUser]));
        setIsLoggedIn(true);
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome ,{email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
            <h2>{isRegister ? 'Login' : 'Register'}</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>{isRegister ? "Login" : "Register"}</button>
          </form>

          <p>
            {isRegister
              ? "Dont have an Account ?"
              : "Already have an Account? LogIN !"}
          </p>
          <button onClick={() => setRegister(!isRegister)}>
            {isRegister ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}
