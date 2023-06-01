// const  openNewBrowser = require('../common/method')
const path = require('path');
const {rules} = require('../constants/aoicycle.constant');
// const fs = require('fs')
// const f= require()
const getPuppeteer = () => {
    const puppeteer = require('puppeteer-extra');
    const StealthPlugin = require('puppeteer-extra-plugin-stealth');
    puppeteer.use(StealthPlugin());
  
    return puppeteer;
};
const openNewBrowser = async () => {
    const puppeteer = getPuppeteer();

    const browser =await puppeteer.launch({
        headless:true,
        executablePath:
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      userDataDir:
        '/Users/ztlab97/Library/Application Support/Google/Chrome/Profile 3',
    });
    return browser;
};
const getLinks = async (page, rules) => {
    console.log("Get Links ", rules);
    
    return await page.evaluate( (rules)=>{
        const linksBikeCard = [];

        document.querySelectorAll(rules).forEach((e)=>{
            linksBikeCard.push({
                url: e.getAttribute('href'),
            });
            
        })  
        return linksBikeCard;
    },
    rules,
    )
    
    
    // console.log(linksBIkeCard);
    // return linksBIkeCard;
}



const getBikeDetails = async (page, rules) => {
    console.log("Get Details ");
    const bike={};
    return await page.evaluate( (rules,bike)=>{
        
        // bike.bike_category=document.querySelector(rules.BIKE_CATEGORY)?.textContent.trim();
        bike.bike_model=document.querySelector(rules.BIKE_MODEL)?.textContent.trim();
        let extra=[];
        let data = document.querySelectorAll(rules.BIKE_FRAME_DETAILS).forEach(result => {
            bike.bike_image=document.querySelector(rules.BIKE_IMAGE)?.getAttribute('src');
            bike.bike_price=document.querySelector(rules.BIKE_PRICE)?.textContent.replace('€','').replace(',','')


            let headings=result.querySelector(rules.BIKE_HEADINGS)?.textContent.trim();
            let details= result.querySelector(rules.BIKE_DESCRIPTION)?.textContent.trim();

            console.log("headings is ::::::::::::::::::::: ", headings);
            switch (headings){
                case 'Frame':
                    bike.frame=details;
                    break;
                case 'Fork':
                    bike.fork=details;
                    break;
                case 'Rear Derailleur':
                    bike.bike_rear_derailleur=details;
                    break;
                case 'Front Derailleur':
                    bike.bike_front_derailleur=details;
                    break;
                case 'Shift':
                    bike.bike_shift_leaver=details;
                    break;
                case 'Cassette':
                    bike.bike_cassette=details;
                    break;
                case 'Crankset':
                    bike.bike_crankset=details;
                    break;
                case 'Wheels':
                    bike.bike_wheels=details;
                    break;
                case 'Brakes':
                    bike.bike_break=details;
                    break;
                case 'Chain':
                    bike.bike_chain=details;
                    break;
                case 'Rear Hub':
                    bike.bike_rear_hubs=details;
                    break;
                case 'Front Hub':
                    bike.bike_front_hubs=details;
                    break;
                case 'Handlebar':
                    bike.bike_handlebar=details;
                    break;
                case 'Stem':
                    bike.bike_stem=details;
                    break;

                case 'Grips':
                    bike.bike_grip=details;
                    break;
                
                case 'Front Light':
                    bike.bike_front_light=details;
                    break;

                case 'Rear Light':
                    bike.bike_rear_light=details;
                    break;
                
                case 'Seat Post':
                    bike.bike_seatpost=details;
                    break;
                case 'Saddle':
                    bike.bike_saddle=details;
                    break;
                case 'Pedals':
                    bike.bike_pedals=details;
                    break;
                case 'Weight':
                    bike.bike_weight=details;
                    break;
                case 'Schock':
                    bike.bike_rear_shock=details;
                    break;
                case 'Bottom Bracket':
                    bike.bike_bottom_bracket=details;
                    break;
                case 'Head Set':
                    bike.bike_headset=details;
                    break;
     
                case 'Break Leaver':
                    bike.bike_break_leaver=details;
                    break;  
                case 'Motor':
                    bike.bike_motor=details;
                    bike.electric="yes";
                    
                    break;
                case 'Battery':
                    bike.bike_battery=details;
                    bike.electric="yes";
                    break;
                case 'Rims':
                    bike.bike_rims=details;
                    break;
                case 'Tires':
                    bike.bike_tires=details;
                    break;
                case 'Gears':
                    bike.bike_gears=details;
                    break;
                default: 
                    
                    extra.push(headings+" : " +details)
                    break;
                
            }
        
            // bike.data= headings
            
        });
        bike.extras=extra.toString();
        extra=[];
        return bike
    },
    rules,
    bike

    )

}

// const bike = async() =>{
//     const browser = await openNewBrowser();
//     const page = await browser.newPage();
//     await page.setViewport({ width: 1920, height: 1080 });
    
//     await page.setRequestInterception(true);
//     page.on('request', (request) => {
//         if (request.resourceType() === 'image') {
//             request.abort();
//         } else {
//             request.continue();
//         }
//     });
// }
const scrape = async () => {
    console.log('Started scraping...');

     const browser = await openNewBrowser();
     const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        if (request.resourceType() === 'image') {
            request.abort();
        } else {
            request.continue();
        }
    });

    await page.goto("https://aoicycle.com/product-category/bikes/");
    await page.waitForTimeout(1000);   
    console.log("Getting links card");
    let allLinks = [... (await getLinks(page, rules.CARD_URL_RULE ))];

    await page.close();
    await browser.close();
    return allLinks;
}

const bikeDetails = async (url) =>{
    console.log("url====================================================================================================", url);
    const browser = await openNewBrowser();
    let bike={};
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.setRequestInterception(true);
    await page.on('request', (request) => {
        if (request.resourceType() === 'image') {
            request.continue();
        } else {
            request.continue();
        }
    });

    console.log("my url",  url);
    await page.goto(url, {timeout: 0});
    await page.waitForTimeout(3000);

    const bikeDetails = [await getBikeDetails(page, rules,bike)];
   
    await page.close();
    await browser.close();
    return bikeDetails;
}

const downloadImage = async (url, ind) =>{
    const img = [];
    const browser = await openNewBrowser();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.setRequestInterception(true);
    await page.on('request', (request) => {
        if (request.resourceType() === 'image') {
            request.continue();
        } else {
            request.continue();
        }
    });

    console.log("my url",  url);
    let viewImage=await page.goto(url, {timeout: 0});
    let fileType = url.slice(url.lastIndexOf('.'), url.length).trim(); 
    let image_name = `bike${ind.toString().padStart(5, 0)}`;

    let fileName = image_name + fileType;
    console.log("============= >> current",  __dirname + `/../AoicycleImages/${fileName}`);
    require('fs').writeFile(
        path.join(__dirname , `/../AoicycleImages/${fileName}`),

        await viewImage.buffer(),
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    );
    await page.waitForTimeout(3000);
    img.push({image_name:image_name})
    await page.close();
    await browser.close();

    return img;

}

module.exports = {
    getLinks,
    scrape,
    bikeDetails,
    downloadImage
}




