const router = require('express').Router();
const batavusBikeController = require('../controller/batavusBikeController')

module.exports = (app) =>{
    app.use('/', router);
    router.get('/cardLink', batavusBikeController.getBikeCardLink);
    router.put('/bikeDetails', batavusBikeController.getBikeDetails);
    router.put('/downloadImage', batavusBikeController.downloadImage);
    
}