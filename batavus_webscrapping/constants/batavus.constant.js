const rules= {
    CARD_URL_RULE: "#ajax-load-more > div.alm-listing.alm-ajax.alm-has-transition.greens_check_query.bike-list.bike-list--alm > div > div > a",
    BIKE_CATEGORY: "",
    
    //BIKE Frame Details
    BIKE_FRAME_DETAILS: "div.tab-pane > dl > div",
    BIKE_HEADINGS: "div.tab-pane > dl > div > dt",
    BIKE_DESCRIPTION: "div.tab-pane > dl > div > dd",

    // BIKE MAIN DETAILS
    BIKE_MODEL:   "body > div.bike-stage.align-items-end.d-flex > div.bikeinfo.top.left > h1",
    BIKE_PRICE:   "body > div.bike-stage.align-items-end.d-flex > div.bikeinfo.top.left > p > span.fw-600 > span",
    BIKE_IMAGE:   "body > div.bike-stage.align-items-end.d-flex > figure > img",
    // BIKE_DETAILS: "#content > div:nth-child(1) > div.bike-text.text-center > p",  
}   

module.exports={ rules }


