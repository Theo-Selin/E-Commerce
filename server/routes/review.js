const router = require("express").Router();
const Review = require("../models/product");
const Product = require("../models/review");
const verifyToken = require("../middlewares/verify-token");
const upload = require("../middlewares/upload-photo");

router.post(
  "/reviews/:productID",
  [verifyToken, upload.single("photo")],
  async (req, res) => {
    try {
      const review = new review();
      review.headline = req.body.headline;
      review.body = req.body.body;
      review.ratings = reg.body.rating;
      review.photo = req.file.location;
      review.user = req.decoded._id;
      review.productID = req.params.productID;

      await Product.update({ $push: review._id });

      const savedReview = await review.save();

      if (savedReview) {
        res.json({
          success: true,
          message: "Successfully created review",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

module.exports = router;
