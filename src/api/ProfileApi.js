export const ProfileApiUrls = {
  postUserProfile: "/user-profile",
  putUserProfile: (id) => `/user-profile/${id}`,
  getCurrentUserProfile: '/user-profile',
  getUserProfileByUsername:(username)=>`/user-profile/${username}`,
  checkUsername: '/user-profile/checkUsername',
  getSocialMediaCategories: '/social-media-category',
  postSocialMediaLinks: '/social-media-links',
  putSocialMediaLinksById:(id)=>`/social-media-links/${id}`,
  deleteSocialMediaLinkById:(id)=> `/social-media-links/${id}`
};
