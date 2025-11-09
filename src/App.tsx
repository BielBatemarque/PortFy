import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { AppRoutes } from "./routes"

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  )
}

export default App
