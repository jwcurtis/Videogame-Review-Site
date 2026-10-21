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

export function SideBar({ HideSideBarClicked, HomeClicked, SearchClicked, AddClicked, ProfileClicked, SignOutClicked }) {


    return (
        <aside className="sidebar" >
            <ToggleButton text="Hide Sidebar" onClick={HideSideBarClicked} />
            <PageButton page="Home" onClick={HomeClicked} />
            <PageButton page="Search Games" onClick={ SearchClicked } />
            <PageButton page="Add Game" onClick={AddClicked} />
            <PageButton page="Profile" onClick={ProfileClicked} />
            <PageButton page="Sign Out" onClick={SignOutClicked} />
        </aside>
  );
}