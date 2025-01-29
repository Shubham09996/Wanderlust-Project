const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const ListingController = require("../controllers/reviews.js");


// POST
router.post("/", isLoggedIn , validateReview, wrapAsync(ListingController.createReview));

// DELETE
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(ListingController.deleteReview));

module.exports = router;