const Razorpay = require("razorpay");

// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });

const RAZORPAY_KEY = "rzp_test_ePQPJPAU4WVu1C"

const RAZORPAY_SECRET = "evbzWslgfvr1nbNDMjl9f1wr"

exports.instance = new Razorpay({
	key_id: RAZORPAY_KEY,
	key_secret: RAZORPAY_SECRET,
});