import { useState } from "react"
import Accordion from "../Accordion/Accordion"
import SelectIcon from "../SelectIcon/SelectIcon"
import "./NavItem.css"

export default function NavItem({
  id,
  title,
  icon = "",
  children = [],
  editNavItemFunc,
}) {
  const [navItemTitle, setNavItemTitle] = useState(null)
  const [navItemChildren, setNavItemChildren] = useState([])

  function changeNavItemIcon(id, icon) {
    editNavItemFunc(id, "icon", icon)
  }

  function joinArray(array, separator = "") {
    array.join(separator)
  }

  const accordionContent = (
    <>
      {/* Title */}
      <div className="w-100">
        <input
          type="text"
          className="p-3"
          placeholder=" "
          value={navItemTitle || title}
          onChange={(e) => {
            setNavItemTitle(e.target.value)
            editNavItemFunc(id, "title", e.target.value)
          }}
        />
      </div>

      {/* Icon */}
      <div className="mt-3">
        <SelectIcon navItem={id} name={icon} setIconFunc={changeNavItemIcon} />
      </div>

      {/* Children */}
      <div className="mt-3 form-floating">
        <textarea
          className="form-control custom-textarea"
          placeholder=" "
          value={
            navItemChildren.length
              ? joinArray(navItemChildren)
              : joinArray(children)
          }
          onChange={(e) => {
            let parsedInput =
              e.data === "," ? e.target.value + "\n" : e.target.value
            setNavItemChildren(parsedInput)

            editNavItemFunc(
              id,
              "children",
              e.target.value
                .replaceAll("\n", "")
                .split(",")
                .map((item) => item.trim())
            )
          }}></textarea>
        <label>Comma Separated Children</label>
      </div>
    </>
  )

  return <Accordion header={title} content={accordionContent} />
}
