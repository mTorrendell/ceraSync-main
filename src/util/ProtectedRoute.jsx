import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

//Verify if user is logged
function ProtectedRouteUser({ redirectPath = "/" }) {}

export { ProtectedRouteUser };
