import React from "react"

export default function Config({ config, setConfig }) {
  return (
    <div
      id="config"
      className="container-fluid tab-pane active mt-3 rounded p-3 ">
      {/* Identity Title */}
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          placeholder=""
          value={config.identity.title}
          onChange={(e) =>
            setConfig((prevConfig) => {
              return { ...prevConfig, identity: { title: e.target.value } }
            })
          }
        />
        <label>Identity</label>
      </div>

      {/* Username */}
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          placeholder=""
          value={config.user.username}
          onChange={(e) =>
            setConfig((prevConfig) => {
              return {
                ...prevConfig,
                user: {
                  username: e.target.value,
                },
              }
            })
          }
        />
        <label>Username</label>
      </div>
    </div>
  )
}
