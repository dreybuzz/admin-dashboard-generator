import Preview from "../Preview/Preview"
import Sidebar from "../Sidebar/Sidebar"
export default function Main() {
  return (
    <main className="h-100 mh-100">
      <div className="container-fluid h-100">
        <div className="row h-100">
          {/* Sidebar */}
          <Sidebar />

          {/* Preview */}
          <Preview />
        </div>
      </div>
    </main>
  )
}
