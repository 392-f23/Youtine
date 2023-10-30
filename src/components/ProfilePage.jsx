import { useAuthState } from "../utilities/firebase";
import { firebaseSignOut } from "../utilities/firebase";
import "./ProfilePage.css";

const ProfilePage = () =>{
    const ProfilePhoto = () => {
        const [user] = useAuthState();
        return user? <img id="profilePic" onClick={firebaseSignOut} src={user.photoURL} alt="Profile Photo" class="circle_profile_photo"/> : <></>;
    }
    return(
        <div className="container1">
            <ProfilePhoto/>
            <button className="rounded-button" onClick={()=>{firebaseSignOut()}}>SignOut</button>
        </div>
    );
}

export default ProfilePage;