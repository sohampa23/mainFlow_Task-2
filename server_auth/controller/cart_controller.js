// const cartmodel = require('../model/cart_model')

// const add_to_cart = async (req, res) => {
//     try {
//         const cartval = new cartmodel({
//             product_id: req.body.product_id,
//             price: req.body.price,
//             vendor_id: req.body.vendor_id,
//             store_id: req.body.vendor_id
//         })
//         const cartdata = await cartval.save();
//         res.status(200).send({
//             success: true,
//             message: "cart product details",
//             data: cartdata
//         })
//     } catch (error) {
//         res.status(400).send({
//             success: false,
//             message: error.message
//         })
//     }
// }

// module.exports = {
//     add_to_cart
// }