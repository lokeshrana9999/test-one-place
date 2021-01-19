import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useGet, useMutate } from "restful-react";

import { connect } from "react-redux";
import { ApiContext, BlockApiUrls } from "@api";
import { PageLoader } from "@look/mobile";
import { setAccessTokene, setRefreshTokene } from "../../store/appReducer";

// import authentication from '@gqlapp/authentication-client-react';

// import CURRENT_USER_QUERY from '../graphql/CurrentUserQuery.graphql';

const withUserBlocks = (Component) => {
  const WithUserBlocksInner = ({ ...props }) => {
    const {
      history,
      refreshToken,
      setAccessTokene,
      accessToken,
      username,
    } = props;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + BlockApiUrls.getBlocksByUsername(username);
    const { data, loading: userBlockLoading, error } = useGet({
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    const userBlockData = data && data.blocksList;

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
        userBlock={userBlockData}
        userBlockLoading={userBlockLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserBlocksInner);
};

const withBlockById = (Component) => {
  const WithBlockByIdInner = ({ ...props }) => {
    const {
      history,
      refreshToken,
      setAccessTokene,
      accessToken,
      match,
    } = props;
    const blockId = match && match.params && match.params.blockId;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + BlockApiUrls.getBlockById(blockId);
    const { data, loading: blockByUsernameLoading, error } = useGet({
      verb: "GET",
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    const blockByUsernameData = data && data.block;

    return blockByUsernameLoading ? (
      <PageLoader />
    ) : (
      <Component
        {...props}
        blockByUsername={blockByUsernameData}
        blockByUsernameLoading={blockByUsernameLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithBlockByIdInner);
};

const withBlockCategoryList = (Component) => {
  const WithBlockCategoryListInner = ({ ...props }) => {
    const {
      history,
      refreshToken,
      setAccessTokene,
      accessToken,
      match,
    } = props;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + BlockApiUrls.getBlockCategory;
    const { data, loading: blockCategoryListLoading, error } = useGet({
      verb: "GET",
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    const blockCategoryList = data && data.blockCategoryList;

    return blockCategoryListLoading ? (
      <PageLoader />
    ) : (
      <Component
        {...props}
        blockCategoryList={blockCategoryList}
        blockCategoryListLoading={blockCategoryListLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithBlockCategoryListInner);
};


const withBlockCategoryById = (Component) => {
  const WithBlockByIdInner = ({ ...props }) => {
    const {
      history,
      refreshToken,
      setAccessTokene,
      accessToken,
      match,
    } = props;
    const blockCategoryId = match && match.params && match.params.blockCategoryId;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + BlockApiUrls.getBlockCategoryById(blockCategoryId);
    const { data, loading: blockCategoryLoading, error } = useGet({
      verb: "GET",
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    const blockCategory = data && data.blockCategory;

    return blockCategoryLoading ? (
      <PageLoader />
    ) : (
      <Component
        {...props}
        blockCategory={blockCategory}
        blockCategoryLoading={blockCategoryLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithBlockByIdInner);
};

const withAddUserBlock = (Component) => {
  const WithAddBlockInner = ({ ...props }) => {
    const { history, refreshToken, setAccessTokene, accessToken } = props;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + BlockApiUrls.postBlock;

    const { mutate: postBlock, loading: postBlockLoading, error } = useMutate({
      verb: "POST",
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    return (
      <Component
        {...props}
        postBlock={postBlock}
        postBlockLoading={postBlockLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAddBlockInner);
};

const withEditUserBlock = (Component) => {
  const WithEditBlockInner = ({ ...props }) => {
    const {
      history,
      refreshToken,
      setAccessTokene,
      accessToken,
      match,
    } = props;
    const blockId = match && match.params && match.params.blockId;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + BlockApiUrls.putBlockById(blockId);
    const { mutate: putBlock, loading: putBlockLoading, error } = useMutate({
      verb: "PUT",
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    return (
      <Component
        {...props}
        putBlock={putBlock}
        putBlockLoading={putBlockLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithEditBlockInner);
};

const withDeleteUserBlock = (Component) => {
  const WithDeleteBlockInner = ({ ...props }) => {
    const { accessToken } = props;
    const defaultApiUrl = useContext(ApiContext);

    async function deleteBlock(id) {
      return await fetch(defaultApiUrl + BlockApiUrls.deleteBlock(id), {
        method: 'DELETE',
        headers:{ Authorization: `Bearer ${accessToken}` }
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      );
    }
    // const apiUrl = defaultApiUrl + BlockApiUrls.deleteBlock;


    // console.log("apiUrl", apiUrl);
    // const {
    //   mutate: deleteBlock,
    //   loading: deleteBlockLoading,
    //   error,
    // } = useMutate({
    //   verb: "DELETE",
    //   path: apiUrl,
    //   requestOptions: {
    //     headers: { Authorization: `Bearer ${accessToken}` },
    //   },
    // });


    return (
      <Component
        {...props}
        deleteBlock={deleteBlock}
        // deleteBlockLoading={deleteBlockLoading}
      />
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithDeleteBlockInner);
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
  withUserBlocks,
  withAddUserBlock,
  withEditUserBlock,
  withBlockById,
  withDeleteUserBlock,
  withBlockCategoryList,
  withBlockCategoryById
  //   hasRole,
  //   withLoadedUser,
  //   IfLoggedIn,
  //   IfNotLoggedIn,
  //   withLogout,
};
