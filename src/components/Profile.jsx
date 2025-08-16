import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Profile = () => {
    const {signOut,session } = useContext(AuthContext);
  return (
    <div className="text-center">
        <p><span>Email:</span><br />{session?.user.email}</p>
        <button onClick={signOut} className="text-red-600">Sign Out</button>
    </div>
  )
}

export default Profile