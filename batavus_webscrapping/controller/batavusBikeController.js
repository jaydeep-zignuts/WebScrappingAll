const { getLinks, scrape, bike, bikeDetails, downloadImage } =require ('../helper/batavusBike.helper');


const { constants, rules } = require('../constants/batavus.constant');
const db = require('../models');
const bikedetailsModel = require('../models/bikedetails.model');
const BatavusBikeDetails = db.BatavusBikeDetails;

const Op = db.Op;
exports.getBikeCardLink = async(req, res)=>{
    console.log("Hello controller called");
    const result =await scrape().then(async (url)=>{
        console.log("data in controller",url);

        for(let ind= 0; ind<url.length;ind++){ 
            await BatavusBikeDetails.create({url : url[ind]["url"]}).then(r=>{
                console.log("created");
            }).catch(err=>{
                console.log("error", err);
            });
        }
        return url;
    }).catch(err => {
        console.log("Error", err);
        return err
    });
    return result;
}

exports.getBikeDetails= async(req, res) =>{
    const findData =  BatavusBikeDetails.findAll({attributes:['url']}).then( result => {
        // console.log(result)
        for(let i=0; i<result.length; i++){
            // console.log("result of url ==> ",result);
             bikeDetails(result[i]['dataValues']['url']).then(data =>{
                console.log("Here is all the data that are available ======================>", data);
                let cur = data[0]['currency']?.replace(/\s\s+/g, ' ');
                // let extraColumn=data[0]['extras'].toString();
                BatavusBikeDetails.update({
                    // brand:data[0]['bikeBrand'],
                    electric:data[0]['electric'],
                    category:data[0]['bike_category'] ,
                    model: data[0]['bike_model'],
                    modelYear: data[0]['bike_model_year'],
                    retailPrice:data[0]['bike_price'] ,
                    currency:cur,
                    rearShock:data[0]['bike_rear_shock'],
                    frontDerailleur:data[0]['bike_front_derailleur'],
                    cassette: data[0]['bike_cassette'],
                    crank: data[0]['bike_crankset'],
                    pedals: data[0]['bike_pedals'],
                    image: data[0]['bike_image'],
                    bike_shock:data[0]['bike_shock'],
                    bike_currency: data[0]['bike_currancy'],
                    frame: data[0]['frame'],
                    fork: data[0]['fork'],
                    color: data[0]['bike_color'],
                    forkSuspensionTravel:data[0]['bike_travel_suspension_fork'] ,
                    motor: data[0]['bike_motor'],
                    battery:data[0]['bike_battery'],
                    charger:data[0]['bike_charger'],
                    bike_display: data[0]['bike_display'],
                    bike_shifter:data[0]['bike_shifter'] ,
                    rearDerailleur:data[0]['bike_rear_derailleur'] ,
                    bike_sprocket: data[0]['bike_sprocket'],
                    chain: data[0]['bike_chain'],
                    bike_crankset: data[0]['bike_crankset'],
                    bike_transimission_drive:data[0]['bike_transimission_drive'] ,
                    bottomBracket:data[0]['bike_bottom_bracket'] ,
                    handlebar:data[0]['bike_handlebar'], 
                    stem:data[0]['bike_stem'],
                    headset:data[0]['bike_headset'], 
                    saddle:data[0]['bike_saddle'], 
                    seatpost:data[0]['bike_seatpost'], 
                    bike_break_caliper:data[0]['bike_break_caliper'], 
                    brakeLevers:data[0]['bike_break_leaver'], 
                    brakes:data[0]['bike_break'],
                    rims: data[0]['bike_rims'], 
                    tires:data[0]['bike_tires'],
                    gear:data[0]['bike_gears'], 
                    weight:data[0]['bike_weight'], 
                    frontHub: data[0]['bike_front_hubs'],
                    rearHub: data[0]['bike_rear_hubs'],
                    frontLight:data[0]['bike_front_light'] ,
                    rearLight:data[0]['bike_rear_light'] ,
                    lockInfo:data[0]["bike_lock"],
                    shiftLevers:data[0]['bike_shift_leaver'],
                    extra:data[0]['extras'],

                },{ where:{ url: result[i]['dataValues']['url']}}).then(Details=>{
                    console.log("Data Added success fully");
                }).catch(err=>{
                    console.log("found error =>", err);
                })

            }).catch(err=>{
                console.log("error is ", err);
            });
        }
    }).catch(err =>{
        console.log("Error ", err);
    })
}

exports.downloadImage =(req, res) =>{
    BatavusBikeDetails.findAll({attributes:['image']}).then((result)=>{
        // console.log("download image controller", result)
        for(let ind=0; ind<result.length; ind++){
            // console.log("Url for download image======================>",result[ind]['dataValues']['image'])
            // const images=result[ind]['dataValues']['image'].split(';')
            // console.log('hello',images[j])
            downloadImage(result[ind]['dataValues']['image'], ind).then((imageData)=>{

                console.log("Image data ========> ", imageData)

                for( let j = 0 ; j< imageData.length ; j++){
                console.log(`image Name at index is ${ind} - ${imageData[j].image_name}`)
                console.log(`image URL at index is ${ind} - ${imageData[j].image_url}`)
                
                BatavusBikeDetails.update({
                    imageName: imageData[j].image_name
                },
                {       
                    where:{
                        image: result[ind]['dataValues']['image']
                    } 
                });
            }
            
            }).catch(err=>{
                console.log(err)
            })
            
            // let spdata= result[ind]['dataValues']['image'].split()z
            
        }
    }).catch(err=>{
        console.log(err);
    });
}

