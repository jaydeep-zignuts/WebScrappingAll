const router = require('express').Router();
const diamantradBikeController = require('../controller/diamantradBikeController')

module.exports = (app) =>{
    app.use('/', router);
    router.get('/cardLink', diamantradBikeController.getBikeCardLink);
    router.put('/bikeDetails', diamantradBikeController.getBikeDetails);
    router.put('/downloadImage', diamantradBikeController.downloadImage);
    
}