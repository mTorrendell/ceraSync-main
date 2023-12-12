import { useSelector } from "react-redux";
import { setIsLogged } from "../redux/slices/authSlice";


function Logout() {
   localStorage.removeItem('yourAuthTokenKey');

}

export { Logout };