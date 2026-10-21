import { useEffect, useState } from 'react';
import './App.css';

import { SideBar, ShowSideBarButton } from './ReactObjects/SideBar.jsx'
import { LoginPage } from './ReactObjects/LoginObject.jsx'
import { HomePage } from './ReactObjects/HomePage.jsx' 

function LogonButtonClicked(event, setIsLoggedIn, setOpenPage) {
    event.preventDefault();
    setIsLoggedIn(true);
    setOpenPage('Home');
}

function ToggleSideBarClicked(event, setIsSidebarOpen) {
    event.preventDefault();
    console.log('Sidebar button event');
    setIsSidebarOpen(prevState => !prevState);
}

function PageButtonClicked(event, setOpenPage) {
    event.preventDefault();
    console.log('Page button event');
    setOpenPage('Home');
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [openPage, setOpenPage] = useState('');


    return (
        <div className="App">
            {isLoggedIn && isSidebarOpen && <SideBar HideSideBarClicked={(event) => ToggleSideBarClicked(event, setIsSidebarOpen)} />}
            {isLoggedIn && !isSidebarOpen && <ShowSideBarButton onClick={(event) => ToggleSideBarClicked(event, setIsSidebarOpen)} />}

          <div className = "main">
                {!isLoggedIn && <LoginPage onLogonSubmit={(event) => LogonButtonClicked(event, setIsLoggedIn, setOpenPage)} />}
                {isLoggedIn && openPage === 'Home' && <HomePage />}
          </div>
        </div>
    );
    
 
}

export default App;