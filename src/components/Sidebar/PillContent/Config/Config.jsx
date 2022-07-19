import React from "react"
import Accordion from "../../../Accordion/Accordion"

export default function Config({ config, setConfig }) {
  return (
    <div
      id="config"
      className="container-fluid tab-pane active mt-3 rounded p-3 ">
      {/* Identity*/}
      <div className="mb-3">
        <Accordion
          header={"Identity"}
          content={
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={config.identity.title}
                onChange={(e) =>
                  setConfig((prevConfig) => {
                    return {
                      ...prevConfig,
                      identity: { title: e.target.value },
                    }
                  })
                }
              />
              <label>Title</label>
            </div>
          }
        />
      </div>

      {/* User Info */}
      <div className="mb-3">
        <Accordion
          header={"User Info"}
          content={
            <div>
              {/* Username */}
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={config.user.username}
                  onChange={(e) =>
                    setConfig((prevConfig) => {
                      return {
                        ...prevConfig,
                        user: {
                          ...prevConfig.user,
                          username: e.target.value,
                        },
                      }
                    })
                  }
                />
                <label>Username</label>
              </div>

              {/* First Name */}
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={config.user.firstName}
                  onChange={(e) =>
                    setConfig((prevConfig) => {
                      return {
                        ...prevConfig,
                        user: {
                          ...prevConfig.user,
                          firstName: e.target.value,
                        },
                      }
                    })
                  }
                />
                <label>First Name</label>
              </div>

              {/* Last Name */}
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={config.user.lastName}
                  onChange={(e) =>
                    setConfig((prevConfig) => {
                      return {
                        ...prevConfig,
                        user: {
                          ...prevConfig.user,
                          lastName: e.target.value,
                        },
                      }
                    })
                  }
                />
                <label>Username</label>
              </div>

              {/* Role */}
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={config.user.role}
                  onChange={(e) =>
                    setConfig((prevConfig) => {
                      return {
                        ...prevConfig,
                        user: {
                          ...prevConfig.user,
                          role: e.target.value,
                        },
                      }
                    })
                  }
                />
                <label>Role</label>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}
