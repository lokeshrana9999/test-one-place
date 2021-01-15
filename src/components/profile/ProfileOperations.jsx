import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useGet, useMutate } from "restful-react";

import { connect } from "react-redux";
import { ApiContext, ProfileApiUrls, UsernameContext, UserApiUrls } from "@api";
import { PageLoader } from "@look/mobile";
import { setAccessTokene, setRefreshTokene } from "../../store/appReducer";

// import authentication from '@gqlapp/authentication-client-react';

// import CURRENT_USER_QUERY from '../graphql/CurrentUserQuery.graphql';
const withCurrentUserProfile = (Component) => {
  const WithUserInner = ({ ...props }) => {
    const { history, refreshToken, setAccessTokene, accessToken } = props;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + ProfileApiUrls.getCurrentUserProfile;
    var currentUserProfileLoading = true;

    var currentUserProfileData;
    const { data, loading, error } = useGet({
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    currentUserProfileLoading = loading;
    currentUserProfileData = data && data.userProfile;
    console.log(data, loading, error);

    // if (
    //   !currentUserProfileLoading &&
    //   !currentUserProfileData &&
    //   error &&
    //   error.status === 401
    // ) {
    // }
    return currentUserProfileLoading || !currentUserProfileData ? (
      <PageLoader />
    ) : (
      <Component
        {...props}
        currentUserProfile={currentUserProfileData}
        currentUserProfileLoading={currentUserProfileLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    console.log("mapstatetoprops", state);
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserInner);
};

const withAddProfile = (Component) => {
  const WithUserInner = ({ ...props }) => {
    const { accessToken, currentUser } = props;
    const defaultApiUrl = useContext(ApiContext);

    const {
      mutate: postUserProfileMutation,
      loading: postUserProfileLoading,
    } = useMutate({
      verb: "POST",
      path: defaultApiUrl + ProfileApiUrls.postUserProfile,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    const {
      mutate: putUserProfileMutation,
      loading: putUserProfileLoading,
    } = useMutate({
      verb: "PUT",
      path:
        defaultApiUrl +
        ProfileApiUrls.putUserProfile(
          currentUser.userProfile && currentUser.userProfile._id
        ),
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    // if (
    //   !currentUserLoading &&
    //   !currentUserData &&
    //   error &&
    //   error.status === 401
    // ) {
    // }
    return (
      <Component
        {...props}
        postUserProfileMutation={postUserProfileMutation}
        putUserProfileMutation={putUserProfileMutation}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    console.log("mapstatetoprops", state);
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserInner);
};

const withAddSocialMedia = (Component) => {
  const WithAddSocialMediaInner = ({ ...props }) => {
    const { accessToken } = props;
    const defaultApiUrl = useContext(ApiContext);

    const {
      mutate: postAddSocialMedia,
      loading: postAddSocialMediaLoading,
    } = useMutate({
      verb: "POST",
      path: defaultApiUrl + ProfileApiUrls.postSocialMediaLinks,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    return (
      <Component
        {...props}
        postAddSocialMedia={postAddSocialMedia}
        postAddSocialMediaLoading={postAddSocialMediaLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    console.log("mapstatetoprops", state);
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAddSocialMediaInner);
};



const withSocialMediaCategories = (Component) => {
  const WithUserInner = ({ ...props }) => {
    const { history, refreshToken, setAccessTokene, accessToken } = props;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + ProfileApiUrls.getSocialMediaCategories;
    const {
      data: socialMediaCategories,
      loading: socialMediaCategoriesLoading,
      error,
    } = useGet({
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    const socialMediaCategoryList =
      socialMediaCategories && socialMediaCategories.socialMediaCategoryList;
    // if (
    //   !currentUserProfileLoading &&
    //   !currentUserProfileData &&
    //   error &&
    //   error.status === 401
    // ) {
    // }
    return socialMediaCategoriesLoading || !socialMediaCategoryList ? (
      <PageLoader />
    ) : (
      <Component
        {...props}
        socialMediaCategoryList={socialMediaCategoryList}
        socialMediaCategoriesLoading={socialMediaCategoriesLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    console.log("mapstatetoprops", state);
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserInner);
};

const withPublicProfileByUsername = (Component) => {
  const WithUserInner = ({ ...props }) => {
    const { accessToken} = props;
    const username = useContext(UsernameContext);
    const defaultApiUrl = useContext(ApiContext);
    console.log('usernameusername', username);
    const apiUrl = defaultApiUrl + UserApiUrls.getUserByUsername(username);

    const { data, loading:userLoading, error } = useGet({
      path: apiUrl,
      requestOptions:{
        headers:{ Authorization: `Bearer ${accessToken}` },
      }
    });
    const userData = data && data.user;

    // if (
    //   !currentUserLoading &&
    //   !currentUserData &&
    //   error &&
    //   error.status === 401
    // ) {
    // }
    return userLoading  ? (
      <PageLoader />
    ) : (
      <Component
        {...props}
        user={userData}
        userLoading={userLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    console.log("mapstatetoprops", state);
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserInner);
};

export {
  withAddProfile,
  withCurrentUserProfile,
  withSocialMediaCategories,
  withAddSocialMedia,
  withPublicProfileByUsername
  //   hasRole,
  //   withLoadedUser,
  //   IfLoggedIn,
  //   IfNotLoggedIn,
  //   withLogout,
};
