import { useEffect, useState } from 'react';
import './App.css';

import { SideBar } from './ReactObjects/SideBar.jsx'
import { LoginPage } from './ReactObjects/LoginObject.jsx'

function LogonButtonClicked(event) {
    event.preventDefault();
    console.log('Login button event');
}

function App() {

    return (
        <div className="App">
          <SideBar />
          <div className = "main">

            <LoginPage onLogonSubmit={LogonButtonClicked} />
          </div>
        </div>
    );
    
 
}

export default App;