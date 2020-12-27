export const BlockApiUrls = {
    getBlockCategory:'/block-category',
    postBlockCategory:'/block-category',
    postBlock:'/block',
    getBlock:'/block',
    getBlockById:(id)=>`/block/${id}`,
    getBlocksByUsername:(username)=>`/block/byUsername/${username}`
}   