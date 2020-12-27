import React from "react";

// import { withCurrentUserProfile } from "../ProfileOperations";
// import { BigPlayButton } from "./ProfileVideoPlayer";
import { withUser } from "../../auth/Auth";

import ProfileView from "../components/ProfileView";

const Profile = (props) => {
  console.log("profile", props);
  const { currentUser, history } = props;
  if (currentUser && !currentUser.userProfile) {
    history.push("/profile/edit");
  }
  return <ProfileView userData={currentUser} self={true} />;
};
// return <h1>Profile</h1>
export default withUser(Profile);
