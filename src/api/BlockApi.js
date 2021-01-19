export const BlockApiUrls = {
  getBlockCategory: "/block-category",
  postBlockCategory: "/block-category",
  getBlockCategoryById: (id) => `/block-category/${id}`,
  postBlock: "/block",
  getBlock: "/block",
  getBlockById: (id) => `/block/${id}`,
  putBlockById: (id) => `/block/${id}`,
  deleteBlock: (id) => `/block/${id}`,
  getBlocksByUsername: (username) => `/block/byUsername/${username}`,
};
