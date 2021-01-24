import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useGet, useMutate } from "restful-react";

import { connect } from "react-redux";
import { ApiContext, OrderApiUrls } from "@api";
import { PageLoader, Loader } from "@look/mobile";
import { setAccessTokene, setRefreshTokene } from "../../store/appReducer";

// import authentication from '@gqlapp/authentication-client-react';

// import CURRENT_USER_QUERY from '../graphql/CurrentUserQuery.graphql';

const withUserOrders = (Component) => {
  const WithUserOrdersInner = ({ ...props }) => {
    const [pageSize, setPageSize] = useState(5);
    const [afterFirstLoad, setAfterFirstLoad] = useState(false);
    const { accessToken, type } = props;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + OrderApiUrls.getCurrentUserOrders;
    const { data, loading: ordersLoading, error } = useGet({
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
      queryParams: {
        status: type,
        pageNumber: 1,
        pageSize: pageSize,
      },
    });
    const ordersData = data;
    const fetchMoreData = () => {
      setAfterFirstLoad(true);
      setPageSize(pageSize + 1);
    };
    // if (
    //   !currentUserLoading &&
    //   !currentUserData &&
    //   error &&
    //   error.status === 401
    // ) {
    // }
    return (
      <React.Fragment>
        {ordersLoading && !afterFirstLoad ? (
          <Loader />
        ) : (
          <Component
            {...props}
            fetchMoreData={fetchMoreData}
            ordersData={ordersData}
            ordersLoading={ordersLoading}
          />
        )}
      </React.Fragment>
    );
  };
  const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
  const mapStateToProps = (state /*, ownProps*/) => {
    return {
      accessToken: state.app.accessToken,
      refreshToken: state.app.refreshToken,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserOrdersInner);
};

const withOrderById = (Component) => {
  const WithOrderByIdInner = ({ ...props }) => {
    const {
      history,
      refreshToken,
      setAccessTokene,
      accessToken,
      match,
    } = props;
    const orderId = match && match.params && match.params.orderId;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + OrderApiUrls.getOrderById(orderId);
    const { data, loading: orderByIdLoading, error } = useGet({
      verb: "GET",
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    // console.log('withBLockQuery', orderByIdLoading, data);
    const orderByIdData = data && data.order;

    return orderByIdLoading ? (
      <PageLoader />
    ) : (
      <Component
        {...props}
        orderById={orderByIdData}
        orderByIdLoading={orderByIdLoading}
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

  return connect(mapStateToProps, mapDispatchToProps)(WithOrderByIdInner);
};

const withAddOrder = (Component) => {
  const WithAddOrderInner = ({ ...props }) => {
    const { history, refreshToken, setAccessTokene, accessToken } = props;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + OrderApiUrls.postOrder;

    const { mutate: postOrder, loading: postOrderLoading, error } = useMutate({
      verb: "POST",
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    return (
      <Component
        {...props}
        postOrder={postOrder}
        postOrderLoading={postOrderLoading}
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

  return connect(mapStateToProps, mapDispatchToProps)(WithAddOrderInner);
};

const withEditOrder = (Component) => {
  const WithEditOrderInner = ({ ...props }) => {
    const {
      history,
      refreshToken,
      setAccessTokene,
      accessToken,
      match,
    } = props;
    const orderId = match && match.params && match.params.orderId;
    const defaultApiUrl = useContext(ApiContext);
    const apiUrl = defaultApiUrl + OrderApiUrls.putOrderById(orderId);
    const { mutate: putOrder, loading: putOrderLoading, error } = useMutate({
      verb: "PUT",
      path: apiUrl,
      requestOptions: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });
    return (
      <Component
        {...props}
        putOrder={putOrder}
        putOrderLoading={putOrderLoading}
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

  return connect(mapStateToProps, mapDispatchToProps)(WithEditOrderInner);
};

const withDeleteOrder = (Component) => {
  const WithDeleteOrderInner = ({ ...props }) => {
    const { accessToken } = props;
    const defaultApiUrl = useContext(ApiContext);

    async function deleteOrder(id) {
      return await fetch(defaultApiUrl + OrderApiUrls.deleteOrder(id), {
        method: "DELETE",
        headers: { Authorization: `Bearer ${accessToken}` },
      }).then((response) =>
        response.json().then((json) => {
          return json;
        })
      );
    }
    // const apiUrl = defaultApiUrl + OrderApiUrls.deleteOrder;

    // console.log("apiUrl", apiUrl);
    // const {
    //   mutate: deleteOrder,
    //   loading: deleteOrderLoading,
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
        deleteOrder={deleteOrder}
        // deleteOrderLoading={deleteOrderLoading}
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

  return connect(mapStateToProps, mapDispatchToProps)(WithDeleteOrderInner);
};

export {
  withUserOrders,
  withAddOrder,
  withEditOrder,
  withOrderById,
  withDeleteOrder,
};
