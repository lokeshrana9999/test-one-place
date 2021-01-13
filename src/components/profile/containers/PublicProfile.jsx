import React from "react";
import { Button } from "../../look/mobile";
// import { withCurrentUserProfile } from "../ProfileOperations";
// import { BigPlayButton } from "./ProfileVideoPlayer";
import { withPublicProfileByUsername } from "../ProfileOperations";

import ProfileView from "../components/ProfileView";

const PublicProfile = (props) => {
  console.log("profile", props);
  const { user, history } = props;
  if (!user) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>User doesn't exist</h2>
        <br />
        <br />
        <br />
        <br />
        <Button type="primary" href="/" size="lg" block>
          Go back
        </Button>
      </div>
    );
  }
  return <ProfileView userData={user} history={history} self={false} />;
};
// return <h1>Profile</h1>
export default withPublicProfileByUsername(PublicProfile);
