import { useEffect, useState } from 'react';
import './App.css';

import { SideBar, ShowSideBarButton } from './ReactObjects/SideBar.jsx'
import { LoginPage } from './ReactObjects/LoginObject.jsx'

function LogonButtonClicked(event, setIsLoggedIn) {
    event.preventDefault();
    console.log('Login button event');
    setIsLoggedIn(true);
}

function ToggleSideBarClicked(event, setIsSidebarOpen) {
    event.preventDefault();
    console.log('Sidebar button event');
    setIsSidebarOpen(prevState => !prevState);
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="App">
            {isLoggedIn && isSidebarOpen && <SideBar HideSideBarClicked={(event) => ToggleSideBarClicked(event, setIsSidebarOpen)} />}
            {isLoggedIn && !isSidebarOpen && <ShowSideBarButton onClick={(event) => ToggleSideBarClicked(event, setIsSidebarOpen)} />}

          <div className = "main">
                {!isLoggedIn && <LoginPage onLogonSubmit={(event) => LogonButtonClicked(event, setIsLoggedIn)} />}
          </div>
        </div>
    );
    
 
}

export default App;