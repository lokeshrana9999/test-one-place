export const OrderApiUrls = {
  postOrder: "/order",
  getCurrentUserOrders:"/order",
  getOrderById: (id) => `/order/${id}`,
  putOrderById: (id) => `/order/${id}`,
  // postBlock: "/block",
  // getBlock: "/block",
  // getBlockById: (id) => `/block/${id}`,
  // deleteBlock: (id) => `/block/${id}`,
  // getBlocksByUsername: (username) => `/block/byUsername/${username}`,
};
