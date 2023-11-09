import { useAuthState } from "../utilities/firebase";
import { firebaseSignOut } from "../utilities/firebase";
import "./ProfilePage.css";

const ProfilePage = () => {
    const ProfilePhotoComponent = () => {
        const [user] = useAuthState();

        return user ? (
            <div>
                <img id="profilePic" onClick={firebaseSignOut} src={user.photoURL} alt="Profile Photo" className="circle_profile_photo" />
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
            </div>
        ) : null;
    }

    return (
        <div className="container1" onClick={firebaseSignOut}>
            <h2 className="main-title">Profile</h2>
            <ProfilePhotoComponent />
            <button className="rounded-button">Sign Out</button>
        </div>
    );
}

export default ProfilePage;