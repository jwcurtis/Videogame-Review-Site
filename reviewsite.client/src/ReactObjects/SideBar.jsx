function PageButton({ page, onClick }) {
    return (
        <button className="page-button" onClick={onClick}>
            {page}
        </button>
    );
}

function HideButton({ onClick }) {
    return (
        <button className = "hide-button" onClick={onClick}>
            Hide
        </button>
    );
}

export function SideBar() {
    return (
        <aside className="sidebar" >
            <HideButton onClick={() => console.log('Hide button clicked')} />
            <PageButton page="Home" onClick={() => console.log('Home button clicked')} />
            <PageButton page="Search Games" onClick={() => console.log('Search Games button clicked')} />
            <PageButton page="Add Game" onClick={() => console.log('Add Game button clicked')} />
            <PageButton page="Profile" onClick={() => console.log('Profile button clicked')} />
            <PageButton page="Sign Out" onClick={() => console.log('Sign Out button clicked')} />
        </aside>
  );
}