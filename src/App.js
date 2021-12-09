import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

/*
Addition of cookies for user and password 
*/
const App = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [cookies, setCookie] = useCookies(['user']);

   const handle = () => {
      setCookie('Name', name, {secure: true, sameSite: 'strict'}, { path: '/' });
      setCookie('Password', pwd, {secure: true, sameSite: 'strict'}, { path: '/' });
      window.location.reload(false);
   };
   return (
      //addition of fields to enter user and pass, including placeholder values
      //and onChange actions to set the values to their cookies
      //button creation with onclick action
      //cookies being called and displayed
      <div className="App">
      <b>Name:</b>
      <input
         placeholder="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <b>Password:</b>
      <input
         type="password"
         placeholder="password"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
      <div>
         <button onClick={handle}>Login</button>
      </div>
      <br />
      
      {cookies.Name && cookies.Password &&(
      <div>
         Thank you for logging in: <p>{cookies.Name} {cookies.Password}</p>
      </div>
      )}
      </div>
   );
};
export default App;
