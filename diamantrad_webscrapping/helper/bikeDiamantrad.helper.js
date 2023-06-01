// const  openNewBrowser = require('../common/method')
const path = require('path');
const {  rules } = require('../constants/bikeDiamantrad.constant')
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

const getBikePrice = async (page, rules) => {
    const bikePrice={};
    return await page.evaluate((rules,bikePrice)=>{
        bikePrice.bike_price=document.querySelector(rules).textContent;
        return bikePrice;
    },
    rules,
    bikePrice,
    )
}

const getBikeDetails = async (page, rules) => {
    console.log("Get Details ");
    const bike={};
    return await page.evaluate( (rules,bike)=>{
        
        
        bike.bike_model=document.querySelector(rules.BIKE_MODEL)?.textContent.trim();
        // bike.bike_category=document.querySelector(rules.BIKE_CATEGORY)?.textContent.trim();
        bike.bike_model_year=document.querySelector(rules.BIKE_MODEL_YEAR)?.textContent.trim().slice(-4);
        // bike.bike_color=document.querySelector(rules.BIKE_COLOR)?.textContent?.split("/")[0].replace(" ", ", ");
        bike.currency=document.querySelector(rules.BIKE_CURRANCY)?.textContent?.trim()
        bike.bike_price=document.querySelector(rules.BIKE_PRICE)?.textContent?.trim();//+ " " +cur;
        let image=[];
        let extra=[];
        let colorName=[];
        let data =document.querySelectorAll(rules.BIKE_FRAME_DETAILS).forEach(result => {
            // bike.bike_image_url=document.querySelector(rules.BIKE_IMAGE).getAttribute('src')
            // bike.bike_category=document.querySelector(rules.BIKE_CATEGORY)?.textContent.trim();

            document.querySelectorAll(rules.BIKE_ALL_COLOR).forEach(async (co)=>{
                let image_url = document.querySelector(rules.BIKE_IMAGE)?.getAttribute('src');
                let bikeColor = document.querySelector(rules.BIKE_COLOR)?.textContent?.trim();
                colorName.push(bikeColor);
                image.push(image_url);
                await co.click();
            } );

            bike.bike_image=image.join(';');   
            bike.bike_color=colorName.toString();
            colorName=[];
            image=[];
            let headings=result.querySelector(rules.BIKE_HEADINGS)?.textContent.trim();
// alert(headings)
            let details= result.querySelector(rules.BIKE_DESCRIPTION)?.textContent;

            console.log("headings is ::::::::::::::::::::: ", headings);
            switch (headings){
                case 'FRAME':
                    bike.frame=details;
                    break;
                case 'RAHMEN':
                    bike.frame=details;
                    break;
                case 'GABEL':
                    bike.fork=details;
                    break;
                case 'SCHALT­WERK':
                    bike.bike_rear_derailleur=details;
                    break;
                case 'UMWERFER':
                    bike.bike_front_derailleur=details;
                    break;
                case 'SCHALTHEBEL':
                    bike.bike_shift_leaver=details;
                    break;
                case 'KASSETTE':
                    bike.bike_cassette=details;
                    break;
                case 'KURBEL­GARNITUR':
                    bike.bike_crankset=details;
                    break;
                case 'LAUF­RÄDER':
                    bike.bike_wheels=details;
                    break;
                case 'BREMSEN':
                    bike.bike_break=details;
                    break;
                case 'KETTE':
                    bike.bike_chain=details;
                    break;
                case 'NABE HINTEN':
                    bike.bike_rear_hubs=details;
                    break;
                case 'NABE VORN':
                    bike.bike_front_hubs=details;
                    break;
                case 'LENKER':
                    bike.bike_handlebar=details;
                    break;
                case 'VORBAU':
                    bike.bike_stem=details;
                    break;

                case 'GRIFFE':
                    bike.bike_grip=details;
                    break;
                
                case 'FRONTLICHT':
                    bike.bike_front_light=details;
                    break;

                case 'RÜCKLICHT':
                    bike.bike_rear_light=details;
                    break;
                
                case 'SATTELSTÜTZE':
                    bike.bike_seatpost=details;
                    break;
                case 'SATTEL':
                    bike.bike_saddle=details;
                    break;
                case 'PEDALE':
                    bike.bike_pedals=details;
                    break;
                case 'GEWICHT':
                    bike.bike_weight=details;
                    break;
                case 'Schock':
                    bike.bike_rear_shock=details;
                    break;
                case 'Tretlager':
                    bike.bike_bottom_bracket=details;
                    break;
                case 'Headset':
                    bike.bike_headset=details;
                    break;
                // case 'Batterie':
                //     bike.bike_battery=details;
                //     break;        
                case 'Bremshebel':
                    bike.bike_break_leaver=details;
                    break;  
                case 'MOTOR':
                    bike.bike_motor=details;
                    bike.electric="yes";
                    
                    break;
                case 'AKKU':
                    bike.bike_battery=details;
                    bike.electric="yes";
                    break;
                case 'Felgen':
                    bike.bike_rims=details;
                    break;
                case 'Reifen':
                    bike.bike_tires=details;
                    break;
                case 'Getriebe':
                    bike.bike_gears=details;
                    break;
                default: 
                    
                    extra.push(headings+" : " +details)
                    break;
                
            }
            
            bike.extras=extra.toString();
            extra=[];
            // bike.data= headings
            
        });
        
        return bike
    },
    rules,
    bike

    )

}

const bike = async() =>{
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
}
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

    await page.goto("https://www.diamantrad.com/bikes/");
    await page.waitForTimeout(1000);   
    
    let allLinks = [... (await getLinks(page, rules.CARD_URL_RULE ))];

    await page.close();
    await browser.close();
    return allLinks;
}

const bikeDetails = async (url) =>{
    console.log("url====================================================================================================", url);
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
    await page.goto(url, {timeout: 0});
    await page.waitForTimeout(3000);

    const bikeDetails = [await getBikeDetails(page, rules,bike)];
   
    await page.close();
    await browser.close();
    return bikeDetails;
}

const downloadImage = async (url, ind) =>{
    const imageData = [];
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
    
    const images=url.split(';')

    const imageName=[];
    for(let i=0;i<images.length;i++){

        let viewImage=await page.goto(images[i], {timeout: 0});

        let image_name = `bike${ind.toString().padStart(5, 0)}-${i}` ;

        console.log("Image name Type", images[i])
        let fileName = image_name + '.png' ;
        imageName.push(fileName)

        console.log(path.join(__dirname , `/../DiamantradImage/${fileName}`));

        require('fs').writeFile(
            path.join(__dirname , `/../DiamantradImage/${fileName}`),
            await viewImage.buffer(),
            (err) => {
                if (err) {
                    console.log(err);
                }
            }
        );
        await page.waitForTimeout(3000);
        imageData.push({image_name:imageName.toString(), image_url :images[i]});

    }
    // console.log("Images Name ==========> ",imageData)
    await page.close();
    await browser.close();
    return imageData;
}

module.exports = {
    getLinks,
    scrape,
    bike,
    bikeDetails,
    getBikePrice,
    downloadImage
}



