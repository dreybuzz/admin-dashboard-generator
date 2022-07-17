import { useState } from "react"
import NavItem from "../NavItemKit/NavItem"
import "./Sidebar.css"
export default function Sidebar() {
  const [navItems, setNavItems] = useState([
    {
      title: "Home",
      icon: "home",
    },
  ])

  function addNewNavItem() {
    setNavItems((navItems) => [...navItems, { title: "Nav Item" }])
  }

  function editNavItem(navItemIndex, key, value) {
    setNavItems(() => {
      return navItems.map((navItem, index) => {
        if (index == navItemIndex) {
          navItem[key] = value
        }
        return navItem
      })
    })
    console.log(navItems)
  }

  return (
    <aside className="col col-md-3 col-lg-2 col-xl-2 h-100 mh-100 p-4 rounded d-flex flex-column">
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
    </aside>
  )
}
