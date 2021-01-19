import React from "react";

// import { withCurrentUserProfile } from "../ProfileOperations";
// import { BigPlayButton } from "./ProfileVideoPlayer";
import { withCurrentUser } from "../../auth/Auth";

import ProfileView from "../components/ProfileView";

const Profile = (props) => {
  const { currentUser, history } = props;
  if (currentUser && !currentUser.userProfile) {
    history.push("/profile/edit");
  }
  return <ProfileView userData={currentUser} history={history} self={true} />;
};
// return <h1>Profile</h1>
export default withCurrentUser(Profile);
