import { useAuthState } from "../utilities/firebase";
import { firebaseSignOut } from "../utilities/firebase";
const ProfilePage = () =>{
    const ProfilePhoto = () => {
        const [user] = useAuthState();
        return user? <img id="profilePic" onClick={firebaseSignOut} src={user.photoURL} alt="Profile Photo" class="circle_profile_photo"/> : <></>;
    }
    return(
        <div>
            <ProfilePhoto/>
            <button onClick={()=>{firebaseSignOut()}}>signOut</button>
        </div>
    );
}

export default ProfilePage;