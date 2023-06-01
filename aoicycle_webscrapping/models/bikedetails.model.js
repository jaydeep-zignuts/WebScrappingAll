
module.exports = (sequelize, DataTypes) =>{
    const aoiCycle = sequelize.define(
        'aoiCycle',
        {   
            url: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
              },
              electric: {
                type: DataTypes.STRING(3),
                defaultValue: 'No',
              },
              brand: {
                type: DataTypes.STRING(40),
                defaultValue: ".",
              },
              model: {
                type: DataTypes.STRING(100),
              },
              modelYear: {
                type: DataTypes.STRING(4),
                defaultValue: "2022"
              },
              image: {
                type: DataTypes.TEXT,
              },
              imageName: {
                type: DataTypes.STRING(10),
              },
              retailPrice: {
                type: DataTypes.STRING(30),
              },
              currency:{
                type: DataTypes.TEXT
              },
              category: {
                type: DataTypes.STRING(40),
              },
              wheelSize: {
                type: DataTypes.STRING(40),
              },
              frame: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              fork: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              rearShock: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              rearDerailleur: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              frontDerailleur: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              shiftLevers: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              cassette: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              crank: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              bottomBracket: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              chain: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              pedals: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              chainGuide: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              rims: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              tires: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              frontHub: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              rearHub: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              spokes: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              brakes: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              brakeLevers: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              diskRotors: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              stem: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              handlebar: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              grips: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              headset: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              saddle: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              seatpost: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              motor: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              battery: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              remote: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              charger: {
                type: DataTypes.TEXT,
                defaultValue: null,
              },
              gear: {
                type: DataTypes.INTEGER,
              },
              remoteControlFork: {
                type: DataTypes.TEXT,
              },
              frontLight: {
                type: DataTypes.TEXT,
              },
              rearLight: {
                type: DataTypes.TEXT,
              },
              lockInfo: {
                type: DataTypes.TEXT,
              },
              weight: {
                type: DataTypes.TEXT,
              },
              frameSuspensionTravel: {
                type: DataTypes.TEXT,
              },
              forkSuspensionTravel: {
                type: DataTypes.TEXT,
              },
              color: {
                type: DataTypes.TEXT,
              },
             
              extra: {
                type: DataTypes.TEXT,
              },
        }
    );
    return aoiCycle;
}
/*

url:{
                type: DataTypes.TEXT,
            },

            bike_brand:{
                type:DataTypes.TEXT,
                defaultValue:"focus"
            },
            bike_category:{
                type:DataTypes.TEXT,
            },
            bike_model:{
                type:DataTypes.TEXT,
            },
            bike_model_year:{
                type:DataTypes.TEXT,
                defaultValue:2022
            },
            bike_image_url:{
                type:DataTypes.TEXT,
            },
            bike_image_name:{
                type:DataTypes.TEXT
            },
            
            bike_color:{
                type:DataTypes.TEXT,
            },
            bike_price:{
                type:DataTypes.TEXT,
            },
            bike_currency:{
                type:DataTypes.TEXT,
                defaultValue:"USD"
            },

            bike_frame:{
                type:DataTypes.TEXT,
            },
            bike_fork:{
                type: DataTypes.TEXT,
            },
            bike_gears:{
                type:DataTypes.TEXT,
            },
            bike_front_derailleur:{
                type:DataTypes.TEXT,
            },
            bike_chain:{
                type:DataTypes.TEXT,
            },
            bike_cassette:{
                type:DataTypes.TEXT,
            },
            bike_pedalboard:{
                type:DataTypes.TEXT,
            },
            bike_rear_hubs:{
                type:DataTypes.TEXT,
            },
            bike_front_hubs:{
                type:DataTypes.TEXT,
            },
            bike_wheel:{
                type:DataTypes.TEXT,
            },
            bike_luggage_rack:{
                type:DataTypes.TEXT,
            },
            bike_crutch:{
                type:DataTypes.TEXT,
            },
            bike_break:{
                type:DataTypes.TEXT,
            },
            bike_handlebar:{
                type:DataTypes.TEXT,
            },
            bike_stem:{
                type:DataTypes.TEXT,
            },
            bike_handles:{
                types:DataTypes.TEXT
            },
            bike_front_light:{
                type:DataTypes.TEXT,
            },
            bike_rear_light:{
                type:DataTypes.TEXT,
            },
            bike_saddle_stem:{
                type:DataTypes.TEXT,
            },
            bike_saddle:{
                type:DataTypes.TEXT,
            },
            bike_pedal:{
                type:DataTypes.TEXT,
            },
            bike_mudguards:{
                type: DataTypes.TEXT
            },
            bike_weight:{
                type:DataTypes.TEXT
            },

            
            default_col:{
                type:DataTypes.TEXT,
            }

*/