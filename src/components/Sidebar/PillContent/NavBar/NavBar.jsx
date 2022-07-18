import NavItem from "../../../NavItemKit/NavItem"
export default function NavBar({ navItems, addNewNavItem, editNavItem }) {
  console.log(navItems)
  return (
    <div id="navbar" className="container-fluid tab-pane fade rounded">
      {navItems &&
        navItems.length &&
        navItems.map((navItem, index) => {
          return (
            <div key={index} className="row mt-3 fadeIn">
              <NavItem
                id={index}
                title={navItem.title}
                icon={navItem.icon}
                children={navItem.children || []}
                editNavItemFunc={editNavItem}
              />
            </div>
          )
        })}

      {/* Add New Nav Item */}
      <div
        className="my-5 d-flex justify-content-center align-items-center p-2 add-nav-item"
        onClick={addNewNavItem}>
        <i
          className="bi bi-plus-square-fill d-flex add-nav-item-btn zoomIn p-2"
          role={"button"}></i>
      </div>
    </div>
  )
}
