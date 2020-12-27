import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useGet, useMutate } from "restful-react";

import { connect } from "react-redux";
import { ApiContext, UserApiUrls, AuthApiUrls } from "../../api";
import { PageLoader } from "../look/mobile";
import { setAccessTokene, setRefreshTokene } from "../../store/appReducer";

// import authentication from '@gqlapp/authentication-client-react';

// import CURRENT_USER_QUERY from '../graphql/CurrentUserQuery.graphql';

const withCurrentUser = (Component) => {
  const WithUserInner = ({ ...props }) => {
    const { history, refreshToken, setAccessTokene, accessToken } = props;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + UserApiUrls.getCurrentUser;
    var currentUserLoading = true;

    var currentUserData;
    const { data, loading, error } = useGet({
      path: apiUrl,
      requestOptions:{
        headers:{ Authorization: `Bearer ${accessToken}` },
      }
    });
    currentUserLoading = loading;
    currentUserData = data && data.user;
    console.log(data, loading, error);

    // if (
    //   !currentUserLoading &&
    //   !currentUserData &&
    //   error &&
    //   error.status === 401
    // ) {
    // }
    return currentUserLoading || !currentUserData ? (
      <PageLoader />
    ) : (
      <Component
        {...props}
        currentUser={currentUserData}
        currentUserLoading={currentUserLoading}
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

const withUserByUsername = (Component) => {
  const WithUserInner = ({ ...props }) => {
    const { history, refreshToken, setAccessTokene, accessToken, match } = props;
    const username = match && match.params && match.params.username;
    const defaultApiUrl = useContext(ApiContext);
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

// const RefreshAccessToken = ({ children,  }) => {
//   const { mutate: refreshAccessToken, loading } = useMutate({
//     verb: "POST",
//     path: defaultApiUrl + AuthApiUrls.refreshAccessToken,
//   });
//   const refreshAccessTokenData = refreshAccessToken(refreshToken);
//   console.log("refreshAccessToken", refreshAccessTokenData);
//   return loading && (<PageLoader> <React.Fragment>{children}</React.Fragment></PageLoader>);
// };

// export default RefreshAccessToken;

// const hasRole = (role, currentUser) => {
//   return currentUser &&
//     (!role ||
//       (Array.isArray(role) ? role : [role]).indexOf(currentUser.role) >= 0)
//     ? true
//     : false;
// };

// const withLoadedUser = (Component) => {
//   const WithLoadedUser = ({ currentUserLoading, ...props }) =>
//     currentUserLoading ? null : <Component {...props} />;

//   WithLoadedUser.propTypes = {
//     currentUser: PropTypes.object,
//     currentUserLoading: PropTypes.bool.isRequired,
//   };

//   return withCurrentUser(WithLoadedUser);
// };

// const IfLoggedInComponent = ({
//   currentUser,
//   role,
//   children,
//   elseComponent,
//   refetchCurrentUser,
//   ...restProps
// }) =>
//   hasRole(role, currentUser)
//     ? React.cloneElement(children, {
//         ...restProps,
//       })
//     : elseComponent || null;
// IfLoggedInComponent.propTypes = {
//   currentUser: PropTypes.object,
//   role: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.string),
//     PropTypes.string,
//   ]),
//   elseComponent: PropTypes.node,
//   children: PropTypes.node,
// };

// const IfLoggedIn = withLoadedUser(IfLoggedInComponent);

// const IfNotLoggedInComponent = ({
//   currentUser,
//   children,
//   refetchCurrentUser,
//   ...restProps
// }) =>
//   !currentUser
//     ? React.cloneElement(children, {
//         ...restProps,
//       })
//     : null;
// IfNotLoggedInComponent.propTypes = {
//   currentUser: PropTypes.object,
//   children: PropTypes.node,
// };

// const IfNotLoggedIn = withLoadedUser(IfNotLoggedInComponent);

// const withLogout = (Component) =>
//   withApollo(({ client, ...props }) => {
//     const newProps = {
//       ...props,
//       logout: () => authentication.doLogout(client),
//     };
//     return <Component {...newProps} />;
//   });

export {
  withCurrentUser,
  withUserByUsername
  //   hasRole,
  //   withLoadedUser,
  //   IfLoggedIn,
  //   IfNotLoggedIn,
  //   withLogout,
};
