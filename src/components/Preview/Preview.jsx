import { useState } from "react"
import { greeting } from "../../statics/all-functions"
import "./Preview.css"
export default function Preview({ config, navItems }) {
  // const [navItemOpened, setNavItemOpened] = useState(false)
  const [openedNav, setOpenedNav] = useState(null)
  return (
    <div className="flex-column d-none d-lg-flex d-md-flex" id="preview">
      {/* Header */}
      <div className="container-fluid border preview-header overflow-hidden">
        <div className="row h-100 mh-100 p-2">
          {/* Identity */}
          <div className="col-2  h-100 mh-100">
            <div className="d-flex align-items-center">
              <span className="w-25">
                <img
                  src="https://picsum.photos/100?random=1"
                  className="img-fluid mh-100"
                />
              </span>
              <span className="fs-5 ms-2">{config.identity.title}</span>
            </div>
          </div>

          {/* Greeting & Ticker*/}
          <div className="col h-100 mh-100">
            <span className="d-flex flex-column preview-header align-items-center">
              <span className="fs-5 fw-bolder">{greeting()}</span>
              <marquee
                className="fs- mt-2"
                behavior="scroll"
                direction="right"
                scrollamount="12">
                ...
              </marquee>
            </span>
          </div>

          {/* User */}
          <div
            className="col-2 h-100 mh-100 p-0 overflow-scroll"
            role={"button"}>
            <div className="container-fluid h-100 mh-100">
              <div className="row h-100 mh-100 justify-content-end">
                {/* Display Picture */}
                <span className="col-4 h-100 mh-100 ">
                  <span className="d-flex align-items-center h-100">
                    <img
                      src="https://picsum.photos/200"
                      className="img-fluid rounded-circle img-thumbnail"
                    />
                  </span>
                </span>

                {/* Name & Role */}

                {/* <span className="col h-100 mh-100 p-0 d-md-none d-lg-block">
                  <span className="d-flex flex-column">
                    Name
                    <span className="">{`${config.user.firstName} ${config.user.lastName}`}</span>

                    Role
                    <span className="badge bg-primary p-2 my-2">
                      {config.user.role}
                    </span>
                  </span>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contents */}
      <div className="border h-100 mh-100 overflow-auto">
        <div className="container-fluid h-100 mh-100">
          <div className="row h-100 mh-100">
            {/* Sidebar */}
            <div className="col-2 d-flex flex-column justify-content-between p-3 h-100 mh-100 overflow-auto">
              {/* NavBar */}
              <div
                className="h-100 mh-100"
                style={{ overflowX: "hidden", overflowY: "scroll" }}>
                {navItems.length &&
                  navItems.map((navItem, index) => (
                    <span key={index}>
                      {/* Parent Container */}
                      <div
                        className={`d-flex justify-content-between align-items-center p-3 zoomIn rounded nav-item-container fadeIn ${
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
    </div>
  )
}
