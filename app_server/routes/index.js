var express = require('express');
var router = express.Router();
var ctrllocations = require('../controller/location');
var ctrlothers = require('../controller/others');

/* GET Locations page. */
router.get('/',ctrllocations.homeList);
router.get('/locations',ctrllocations.locationInfo);
 router.get('/locations/review/new',ctrllocations.addReview);
/* get others page */
router.get('/about',ctrlothers.about);
router.get('/signin', ctrlothers.signin);

router.get('/register', ctrlothers.register);

module.exports= router;