import { useState } from "react"
import "./Preview.css"
export default function Preview({ config, navItems }) {
  // const [navItemOpened, setNavItemOpened] = useState(false)
  const [openedNav, setOpenedNav] = useState(null)
  return (
    <div
      className="col h-100 d-none d-lg-flex d-md-flex preview h-100 mh-100 border"
      id="preview">
      <div className="container-fluid h-100 mh-100 d-flex flex-column border">
        {/* Header */}
        <div className="row border preview-header">
          {/* Identity */}
          <div className="col-2 border d-flex mh-100 align-items-center">
            <span className="w-25">
              <img
                src="https://picsum.photos/100?random=1"
                class="img-fluid mh-100"
              />
            </span>
            <span className="fs-5 ms-2">{config.identity.title}</span>
          </div>

          {/* Greeting */}
          <div className="col h-100 border"></div>

          {/* User */}
          <div className="col-2 border d-flex h-100 mh-100 p-1">
            <img
              src="https://picsum.photos/200"
              class="img-fluid rounded-circle img-thumbnail"
            />
          </div>
        </div>

        {/* Main Contents */}
        <div className="row p-0 h-100 mh-100 overflow-auto">
          {/* Sidebar */}
          <div className="col-2 d-flex flex-column justify-content-between p-3 h-100 mh-100 overflow-auto">
            {/* NavBar */}
            <div>
              {navItems.length &&
                navItems.map((navItem, index) => (
                  <span key={index}>
                    {/* Parent Container */}
                    <div
                      className={`d-flex justify-content-between align-items-center p-3 zoomIn rounded nav-item-container ${
                        index > 0 && "mt-4"
                      }`}
                      role={"button"}
                      onClick={() => {
                        index !== openedNav
                          ? setOpenedNav(index)
                          : setOpenedNav(null)
                      }}>
                      {/* Icon & Title */}
                      <span className="d-flex">
                        {/* Icon */}
                        <span className=" d-flex align-items-center me-3">
                          <ion-icon name={navItem.icon}></ion-icon>
                        </span>

                        {/* Title */}
                        <span className="">{navItem.title}</span>
                      </span>

                      {/* Arrow */}
                      {navItem.children && navItem.children.length && (
                        <span>
                          <ion-icon
                            name={`${
                              openedNav != index
                                ? "arrow-dropdown"
                                : "arrow-dropup"
                            }`}></ion-icon>
                        </span>
                      )}
                    </div>

                    {/* Sub Menu */}
                    {navItem.children && (
                      <div
                        className={`d-flex flex-column ms-5 p-2 ${
                          openedNav != index && "d-none"
                        }`}
                        role={"button"}>
                        {navItem.children.map((child, index) => (
                          <div
                            key={index}
                            className="d-flex ms-1 mb-2 hover p-2 rounded zoomIn fadeIn"
                            style={{ width: "fit-content" }}>
                            {child}
                          </div>
                        ))}
                      </div>
                    )}
                  </span>
                ))}
            </div>

            {/* Logged In User */}
            <div className="rounded border-bottom border-top p-2 d-flex justify-content-center">
              <span className="fs-6 fw-bolder">
                Logged in as: {config.user.username}
              </span>
            </div>
          </div>

          {/* Main Contents */}
          <div className="col p-5 bg-dark rounded">Main Contents Preview</div>
        </div>
      </div>
    </div>
  )
}
