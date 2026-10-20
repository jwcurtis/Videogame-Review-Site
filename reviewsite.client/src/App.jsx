import { useEffect, useState } from 'react';
import './App.css';

import { SideBar } from './ReactObjects/SideBar.jsx'
import { LoginPage } from './ReactObjects/LoginObject.jsx'

function onLogonSubmit() {
    // Handle login logic here
    console.log('Login button event');
}

function App() {

    return (
        <div className="App">
          <SideBar />
          <div className = "main">

            <LoginPage onLogonSubmit={onLogonSubmit} />
          </div>
        </div>
    );
    
 
}

export default App;