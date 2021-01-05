export const BlockApiUrls = {
    getBlockCategory:'/block-category',
    postBlockCategory:'/block-category',
    postBlock:'/block',
    getBlock:'/block',
    getBlockById:(id)=>`/block/${id}`,
    putBlockById:(id)=>`/block/${id}`,
    deleteBlock: `/block`,
    getBlocksByUsername:(username)=>`/block/byUsername/${username}`
}   