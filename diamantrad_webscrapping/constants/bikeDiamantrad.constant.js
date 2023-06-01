const rules= {
    CARD_URL_RULE: "body > div.container.bikefinder > div > div> a",
    BIKE_CATEGORY: "#bike-top > div > div.col-12.text-center.bike-name-details > h2 > div > a:nth-child(1) > u",
    
    //BIKE Frame Details
    BIKE_FRAME_DETAILS: "#bike-data-list > div > div > div > table > tbody > tr",
    // BIKE_HEADINGS: "#bike-data-list > div > div > div > table > tbody > tr > td > strong > font > font",
    BIKE_HEADINGS: "#bike-data-list > div > div > div > table > tbody > tr > td > strong",
    
    BIKE_DESCRIPTION: "#bike-data-list > div > div> div > table > tbody > tr > td:nth-child(2)",

    // BIKE MAIN DETAILS
    BIKE_MODEL: "#bike-top > div > div.col-lg-5.px-md-3.bike-config-details > div:nth-child(1) > h3 > span",
    BIKE_MODEL_YEAR:"#bike-top > div > div.col-12.text-center.bike-name-details > h2 > div",
    BIKE_PRICE: "#bike-top > div > div.col-lg-5.px-md-3.bike-config-details > div.bike-price-container.my-4 > div > span.bike-price",
    BIKE_CURRANCY : "#bike-top > div > div.col-lg-5.px-md-3.bike-config-details > div.bike-price-container.my-4 > div > span:nth-child(2)",    
    BIKE_TOTAL_IMAGES:"#bike-top > div > div.col-lg-5.px-md-3.bike-config-details > div.row.table-config > div.col-md-9.mb-4.mb-md-2.mt-1.align-self-center.color-filter",
                      //  #bike-top > div > div.col-lg-5.px-md-3.bike-config-details > div.row.table-config > div.col-md-9.mb-4.mb-md-2.mt-1.align-self-center.color-filter
    // NEXT_PAGE:"",
    BIKE_COLOR:"#bike-top > div > div.col-lg-5.px-md-3.bike-config-details > div.row.table-config > div.col-md-9.mb-4.mb-md-2.mt-1.align-self-center.color-filter > div.color.p-1.active > div > span.color-desc",
    BIKE_ALL_COLOR:"#bike-top > div > div > div > div> div.color.p-1",
                    
    BIKE_IMAGE:"#slick-slide00 > a > figure > img",  
}   

const constants = {
    SITE_URL: 'https://www.diamantrad.com/bikes/',
  };
module.exports={ constants, rules }


