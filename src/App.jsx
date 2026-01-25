import RoutesApp from "./RoutesApp"
import { ToastContainer } from 'react-toastify'
import AuthProvider from "./context/Auth"

function App() {
  return (
  <AuthProvider>
    <ToastContainer autoClose={3000} />
    <RoutesApp />
  </AuthProvider>
  )
}

export default App
