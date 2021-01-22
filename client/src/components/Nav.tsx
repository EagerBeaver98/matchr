import React from 'react';
import '../App.scss';
import '../bootstrap/vendor/bootstrap/css/bootstrap.css'
import '../bootstrap/vendor/bootstrap/css/custom.css'
import Cookies from 'universal-cookie';

function Nav(props: any) {
  let partner: string = "nav-item right";
  let login: string = "nav-item right";
  let match: string = "nav-item right";
  let matchList: string = "nav-item right";
  const cookies = new Cookies();

  function logout() {
    cookies.remove('email')
    props.pageChange('login')
  }

  if (props.view === "login") {
    login += " active";
  }

  if (props.view === "match") {
    match += " active";
  }

  if (props.view === 'partner') {
    partner += " active"
  }

  if (cookies.get('email')) {
  return (
    <ul className="navbar-nav ml-auto">
      <li className={partner}>
        <span className="nav-link" onClick={() => props.pageChange('partner')}>Partner Management
        </span>
      </li>
      <li className={match}>
        <span className="nav-link" onClick={() => props.pageChange('match')}>Match
        </span>
      </li>
      <li>
        <span className="nav-link" onClick={() => logout()}>Logout     
        </span>
      </li>
    </ul>
    
  )
   } else {
     return(
       <ul className="navbar-nav ml-auto">
         <li>
           <span className="nav-link" onClick={() => props.pageChange('login')}>Login
           </span>

         </li>
       </ul>
     )
   } 
}

export default Nav