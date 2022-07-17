import logo from "./../../logo.svg"
import "./Header.css"

export default function Header({ theme, themeToggleFunc }) {
  return (
    <header>
      <div className="container-fluid border-bottom pb-2">
        <div className="row justify-content-between align-items-center">
          {/* Logo */}
          <div className="col-2 col-lg-1 d-flex align-items-center">
            <img src={logo} className="img-fluid logo w-50" alt="logo" />
          </div>

          {/* Project Title */}
          <div className="col d-flex justify-content-center">
            <span className="project-title">Admin Dashboard Generator</span>
          </div>

          {/* Theme Switcher */}
          <div
            className="col-2 col-lg-1 d-flex justify-content-end"
            // onClick={() => themeToggleFunc(!theme)}
            id="theme-toggler">
            <i className={`bi bi-lightbulb-fill theme-bulb`}></i>
          </div>
        </div>
      </div>
    </header>
  )
}
