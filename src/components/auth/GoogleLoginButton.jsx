import React from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Button } from "@look/web";

import {
  setGoogleAccessTokene,
  setGoogleTokeneId,
} from "../../store/appReducer";

const refreshTokenSetup = (res, setGoogleAcc, setGoogleTok) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log("newAuthRes:", newAuthRes);
    setGoogleAcc(newAuthRes.access_token);
    setGoogleTok(newAuthRes.tokenId);
    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};

const GoogleLoginButton = ({ ...props }) => {
  const {
    buttonText,
    setGoogleAccessTokene,
    setGoogleTokeneId,
    redirect,
    history,
  } = props;

  const handleSuccess = (res) => {
    console.log("handleSuccess", res);
    refreshTokenSetup(res, setGoogleAccessTokene, setGoogleTokeneId);
    setGoogleTokeneId(res.tokenId);
    redirect && history.push(redirect);
    fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${res.tokenId}`
    )
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log("datadatadata", data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  };

  const handleFailure = (res) => {
    console.log("handleFailure", res);
  };


  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
      render={(renderProps) => (
        <Button
          type="primary"
          size="large"
          block
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          icon={
            <AiFillGoogleCircle
              style={{
                fontSize: "30px",
                marginRight: "5px",
                marginTop: "-10px",
                marginBottom: "-10px",
              }}
            />
          }
        >
          {buttonText}
        </Button>
      )}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={"single_host_origin"}
    //   isSignedIn={true}
    />
  );
};

const mapDispatchToProps = { setGoogleAccessTokene, setGoogleTokeneId };
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    googleAccessToken: state.app.googleAccessToken,
    googleTokenId: state.app.googleTokenId,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GoogleLoginButton));
