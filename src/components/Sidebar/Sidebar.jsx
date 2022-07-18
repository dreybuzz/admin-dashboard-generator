import Config from "./PillContent/Config/Config"
import NavBar from "./PillContent/NavBar/NavBar"
import "./Sidebar.css"

export default function Sidebar({ config, setConfig, navItems, setNavItems }) {
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
  }

  return (
    <aside className="col col-md-3 col-lg-2 col-xl-2 h-100 mh-100 rounded d-flex flex-column p-1">
      {/* Pills */}
      <ul
        className="nav nav-pills d-flex justify-content-between my-3 "
        role="tablist">
        {/* Config */}
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="pill" href="#config">
            Config
          </a>
        </li>

        {/* NavBar */}
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="pill" href="#navbar">
            NavBar
          </a>
        </li>

        {/* Miscs */}
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="pill" href="#miscs">
            Miscs
          </a>
        </li>
      </ul>

      {/* Pill Contents */}
      <div className="tab-content h-100 mh-100 overflow-auto">
        {/* Config */}
        <Config config={config} setConfig={setConfig} />

        {/* NavBar */}
        <NavBar
          navItems={navItems}
          addNewNavItem={addNewNavItem}
          editNavItem={editNavItem}
        />

        {/* Miscs */}
        <div
          id="miscs"
          className="container-fluid tab-pane fade mt-3 rounded p-3">
          Miscs
        </div>
      </div>
    </aside>
  )
}
