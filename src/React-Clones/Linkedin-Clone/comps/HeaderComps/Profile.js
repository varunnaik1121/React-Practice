import React, { useState } from "react";
import { signOutFromGoogle } from "../../firebase/firebase";
const profileAddress =
  "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=170667a&w=0&h=8haDTC2HXTF6Qb0TkjDy3FauBCd9PCchl6KKX2cUpqg=";
const Profile = () => {
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);
  return (
    <span
      className="profile-wrapper"
      onMouseMove={() => {
        setIsSignOutOpen(true);
      }}
      onMouseLeave={() => {
        setIsSignOutOpen(false);
      }}
    >
      <img src={profileAddress} alt="profile" className="profile-image"></img>
      {isSignOutOpen && (
        <button
          className="signout"
          onClick={() => {
            signOutFromGoogle();
          }}
        >
          sign out
        </button>
      )}
    </span>
  );
};

export default Profile;
