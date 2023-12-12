import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../redux/slices/authSlice";

//Verify if user is logged
//Put alert
function ProtectedRouteUser({ redirectPath = "/" }) {
  const data = useSelector(selectIsLogged);
  if (!data) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export { ProtectedRouteUser };
