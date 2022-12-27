import { Navigate } from "react-router-dom"

const HomeRoute = ({ auth, children }) => {
    console.log("private routing")
        return auth ? children : <Navigate to="/login" />
     
}

export { HomeRoute }