const router = require('express').Router();
const aoicycleController = require('../controller/aoicycleController')

module.exports = (app) =>{
    app.use('/', router);
    router.get('/cardLink', aoicycleController.getBikeCardLink);
    router.put('/bikeDetails', aoicycleController.getBikeDetails);
    router.put('/downloadImage', aoicycleController.downloadImage);
    router.put('/imageUrl', aoicycleController.getImageurl);
    
}