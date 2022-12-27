import { Navigate } from "react-router-dom"

const PublicRoute = ({ auth, children }) => {
  console.log("public routing")
    return auth ? <Navigate to="/" /> : children
     
}

export { PublicRoute }