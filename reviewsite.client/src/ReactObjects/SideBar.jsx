function PageButton({ page, onClick }) {
    return (
        <button className="page-button" onClick={onClick}>
            {page}
        </button>
    );
}

function ToggleButton({ text, onClick }) {
    return (
        <button className = "hide-button" onClick={onClick}>
            {text}
        </button>
    );
}

export function ShowSideBarButton({ onClick }) {
    return (
        <aside className = "hidden-sidebar">
            <ToggleButton className="show-button" text="Show Sidebar" onClick={onClick} />
        </aside>    
    )
}

export function SideBar({ HideSideBarClicked }) {


    return (
        <aside className="sidebar" >
            <ToggleButton text="Hide Sidebar" onClick={HideSideBarClicked} />
            <PageButton page="Home" onClick={() => console.log('Home button clicked')} />
            <PageButton page="Search Games" onClick={() => console.log('Search Games button clicked')} />
            <PageButton page="Add Game" onClick={() => console.log('Add Game button clicked')} />
            <PageButton page="Profile" onClick={() => console.log('Profile button clicked')} />
            <PageButton page="Sign Out" onClick={() => console.log('Sign Out button clicked')} />
        </aside>
  );
}