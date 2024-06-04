const zod = require("zod");
const createBusinessCard= zod.object({
    name: zod.string(),
    description: zod.string(),
    interests: zod.string(),
    linkedin: zod.string(),
    twitter: zod.string()
})


// const updateBusinessCard = zod.object({
//     id:zod.string(),
// })

module.exports = {
    createBusinessCard: createBusinessCard,
    // updateBusinessCard: updateBusinessCard
}