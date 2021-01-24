import React from "react";
import { Empty } from "antd";
// import { useGet, useMutate } from "restful-react";
import { connect } from "react-redux";
import { ApiContext, OrderApiUrls } from "@api";

import InfiniteScroll from "react-infinite-scroller";
import { Loader } from "@look/mobile";
import MyOrdersProfileComponent from "./MyOrdersProfileComponent";

class MyOrdersListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      ordersList: [],
      totalPages: 1,
      totalItems: 0,
      currentPage: 0,
      loading: false,
      overallLoading: false,
      // prevY: 0
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount", this.props.type, this.state);
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });
    const { accessToken, type } = this.props;
    const { currentPage, ordersList, totalPages } = this.state;
    let apiUrl = this.context;
    const fullApiUrl = `${apiUrl}${
      OrderApiUrls.getCurrentUserOrders
    }?status=${type}&pageNumber=${currentPage + 1}&pageSize=5`;
    console.log("cdlskjflasd", currentPage, totalPages);
    if (currentPage < totalPages) {
      fetch(fullApiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }

          // Examine the text in the response
          response.json().then((data) => {
            console.log("data,", data);
            const { totalItems } = data;
            const newOrdersList = [...ordersList, ...data.ordersList];
            this.setState({
              ordersList: newOrdersList,
              totalItems,
              totalPages: data && data.totalPages,
              currentPage: data.currentPage,
              loading: false,
            });
          });
        })
        .then((data) => {
          console.log("datadata", data);
        })
        .catch((err) => {
          console.log("Fetch Error :-S", err);
          this.setState({ loading: false });
        });
    } else {
      this.setState({ loading: false });
    }
  };

  handleFetchMoreData = () => {
    const { totalPages, currentPage } = this.state;
    if (currentPage < totalPages) {
      setTimeout(() => {
        this.fetchData();
      }, 3000);

      console.log("loadmore, loadmore", totalPages, currentPage);
    } else {
      return "No more Items";
    }
  };
  render() {
    const {
      type,
      handleOpenModal,
      fetchMoreData,
      scrollableTarget,
    } = this.props;
    const { loading, ordersList, currentPage, totalPages } = this.state;
    // const infiniteScrollDiv = useRef(null);

    return (
      <div
        style={{ height: "30vh", overflow: "auto" }}
        id="scrollablediv"
        // key={`my-orderslist${type}`}
        // ref={(ref) => (this.scrollParentRef = ref)}
      >
        <>
          <InfiniteScroll
            threshold={40}
            pageStart={0}
            loadMore={this.handleFetchMoreData}
            hasMore={currentPage < totalPages}
            loader={
              <div style={{ height: "60px" }}>
                <Loader />
              </div>
            }
            useWindow={false}
          >
            <>
              {ordersList && ordersList.length === 0
                ? currentPage !== 0 && (
                    <Empty description={`No ${type} orders`} />
                  )
                : ordersList.map((pendO, i) => (
                    <MyOrdersProfileComponent
                      key={i}
                      order={pendO}
                      handleOpenModal={handleOpenModal}
                    />
                  ))}
              {currentPage === totalPages && (
                <div style={{ textAlign: "center", padding: "10px 0" }}>
                  {" "}
                  End of orders list
                </div>
              )}
            </>
          </InfiniteScroll>
        </>
      </div>
    );
  }
}

MyOrdersListComponent.contextType = ApiContext;

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    accessToken: state.app.accessToken,
    refreshToken: state.app.refreshToken,
  };
};

export default connect(mapStateToProps)(MyOrdersListComponent);
