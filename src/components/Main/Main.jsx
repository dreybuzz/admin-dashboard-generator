import { useState } from "react"
import Preview from "../Preview/Preview"
import Sidebar from "../Sidebar/Sidebar"
export default function Main() {
  const [navItems, setNavItems] = useState([
    {
      title: "Home",
      icon: "home",
      children: null,
    },
  ])
  return (
    <main className="h-100 mh-100">
      <div className="container-fluid h-100">
        <div className="row h-100">
          {/* Sidebar */}
          <Sidebar navItems={navItems} setNavItems={setNavItems} />

          {/* Preview */}
          <Preview navItems={navItems} />
        </div>
      </div>
    </main>
  )
}
