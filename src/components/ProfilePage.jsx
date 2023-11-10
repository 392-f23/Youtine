import { useAuthState } from "../utilities/firebase";
import { firebaseSignOut } from "../utilities/firebase";
import "./ProfilePage.css";
const ProfilePhotoComponent = () => {
    const [user] = useAuthState();

    return user ? (
        <div>
            <img id="profilePic"  src={user.photoURL} alt="Profile Photo" className="circle_profile_photo" />
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
        </div>
    ) : null;
}
const ProfilePage = () => {
    

    return (
        <div className="container1" >
            <h2 className="main-title">Profile</h2>
            <ProfilePhotoComponent />
            <button className="rounded-button">Sign Out</button>
        </div>
    );
}

export default ProfilePage;

// import { useAuthState } from "../utilities/firebase";
// import { firebaseSignOut } from "../utilities/firebase";
// import "./ProfilePage.css";

// const ProfilePhotoComponent = () => {
//     const [user] = useAuthState();

//     return user ? (
//         <div className="profile-photo-section">
//             <img src={user.photoURL} alt="Profile" className="profile-photo" />
//             <div className="user-info">
//                 <h3>{user.displayName}</h3>
//                 <p>{user.email}</p>
//             </div>
//         </div>
//     ) : null;
// }

// const ProfilePage = () => {
//     return (
//         <div className="profile-container">
//             <header className="profile-header">
//                 <h1>Profile</h1>
//             </header>
//             <main className="profile-content">
//                 <ProfilePhotoComponent />
//                 <button onClick={firebaseSignOut} className="signout-button">Sign Out</button>
//             </main>
//         </div>
//     );
// }

// export default ProfilePage;
