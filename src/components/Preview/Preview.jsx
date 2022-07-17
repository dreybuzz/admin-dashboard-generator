import "./Preview.css"
export default function Preview({ navItems }) {
  return (
    <div className="col h-100 d-none d-lg-flex d-md-flex preview border">
      <div className="container-fluid h-100 p-0">
        <div className="row h-100 p-0">
          <div className="col-2 border h-100 d-flex flex-column p-3">
            {navItems.length &&
              navItems.map((navItem, index) => (
                <div
                  key={index}
                  className={`d-flex justify-content-start align-items-center mb-3 p-3 zoomIn rounded nav-item-container `}
                  role={"button"}>
                  <span className=" d-flex align-items-center me-3">
                    <ion-icon name={navItem.icon}></ion-icon>
                  </span>
                  <span className="">{navItem.title}</span>
                </div>
              ))}
          </div>
          <div className="col border h-100"></div>
        </div>
      </div>
    </div>
  )
}
