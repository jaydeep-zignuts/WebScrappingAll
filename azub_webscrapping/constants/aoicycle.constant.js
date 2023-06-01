const rules= {
    // BIKE_CARD:"article > div > div > div > div > div > div > div",
    // BIKE_CARD_URL: "article > div > div > div > div.et_section_regular.et_section_transparent > div > div.et_pb_column.et_pb_column_1_3.et_pb_column_1.et_pb_css_mix_blend_mode_passthrough > div.et_pb_module.et_pb_image.et_pb_image_3.et_pb_has_overlay > a",
    BIKE_CARD_URL: "article > div > div > div > div > div> div > div > a",
    // BIKE_IMAGE:"article > div > div > div > div.et_pb_section.et_pb_section_0.et_section_regular.et_section_transparent.et_pb_section_first > div.et_pb_row.et_pb_row_2.et_pb_gutters1 > div.et_pb_column.et_pb_column_1_3.et_pb_column_1.et_pb_css_mix_blend_mode_passthrough > div.et_pb_module.et_pb_image.et_pb_image_3.et_pb_has_overlay > a > span > img",  
    // BIKE_CARD_URL: "article > div > div > div > div > div > div > div > a",
    BIKE_IMAGE:"article > div > div > div > div > div > div > div > a > span > img",  

    BIKE_CATEGORY: "",
    
    //BIKE Frame Details
    BIKE_FRAME_DETAILS: "article > div > div > div > div > div > div > div > div > table > tbody > tr",
    BIKE_HEADINGS: "article > div > div > div > div > div > div > div > div > table > tbody > tr > td:nth-child(1)",
    BIKE_DESCRIPTION: "article > div > div > div > div > div > div > div > div > table > tbody > tr > td:nth-child(2)",

    // BIKE MAIN DETAILS
    BIKE_MODEL: "article > div > div > div > div > div> div > div > div > h2 > span",
    BIKE_PRICE: "article > div > div > div > div > div > div > div.et_pb_module.et_pb_text.et_pb_text_3.et_pb_text_align_center.et_pb_bg_layout_light > div > p > span",
    BIKE_COLOR:"",             
    BIKE_MODEL_YEAR:"",
    BIKE_WHEEL_SIZE:"article > div > div > div > div> div > div> div > div > p > span",
}   

module.exports={ rules }

//
// document.querySelectorAll("article > div > div > div > div > div > div > div").forEach(e=>{
    // e.querySelectorAll('article > div > div > div > div > div > div > div > a > span > img').forEach(r=>{ console.log(r.getAttribute('src')) })
// })