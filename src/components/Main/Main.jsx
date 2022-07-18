import { useState } from "react"
import Preview from "../Preview/Preview"
import Sidebar from "../Sidebar/Sidebar"
import "./Main.css"
export default function Main() {
  // Config State
  const [config, setConfig] = useState({
    identity: {
      title: "Admin",
    },
    user: {
      username: "thanos",
      firstName: "Athanasios",
      lastName: "Pisanidis",
      email: "madtitan@mcu.com",
      role: "Villain",
    },
  })

  // NavItems
  const [navItems, setNavItems] = useState([
    {
      title: "Home",
      icon: "home",
      children: null,
    },

    {
      title: "Wallet",
      icon: "wallet",
      children: ["Create", "Top Up", "Withdraw"],
    },
  ])

  return (
    <main className="d-flex">
      {/* Sidebar */}
      <Sidebar
        config={config}
        setConfig={setConfig}
        navItems={navItems}
        setNavItems={setNavItems}
      />

      {/* Preview */}
      <Preview config={config} navItems={navItems} />
    </main>
  )
}
