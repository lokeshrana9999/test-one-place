import React from "react";
import { connect } from "react-redux";
import { useGet } from "restful-react";
import { PageLoader } from "@look/mobile";
import { withBlockById } from "../../block/BlockOperations";

import CheckoutView from "../components/CheckoutView";

const Checkout = (props) => {
  const { googleTokenId, history, match } = props;
  const { data, error, loading } = useGet({
    path: `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${googleTokenId}`,
  });
  if (error) {
    history.push(
      `/block/detail/${match && match.params && match.params.blockId}`
    );
  }
  const customerData = {
    name: data && data.name,
    avatar: data && data.picture,
    email: data && data.email,
  };
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <CheckoutView {...props} customerData={customerData} />
      )}
    </>
  );
};
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    googleAccessToken: state.app.googleAccessToken,
    googleTokenId: state.app.googleTokenId,
  };
};

export default withBlockById(connect(mapStateToProps)(Checkout));
