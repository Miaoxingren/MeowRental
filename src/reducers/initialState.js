const initialState = {
    single: {
        water: 8,
        power: 1.3,
        net: 50,
        manage: 20
    },
    history: [
        {
            date: '2017-05',
            data: [{title: '101', key: '101', rented: true, rental: {waterL: 659,waterT: 659,waterUse: 0,water: 0,powerL: 6825,powerT: 6825,powerUse: 0,power: 0,house: 680,manage: 20,net: 0}},
{title: '102', key: '102', rented: true, rental: {waterL: 201,waterT: 201,waterUse: 0,water: 0,powerL: 2144,powerT: 2144,powerUse: 0,power: 0,house: 680,manage: 20,net: 0}},
{title: '103', key: '103', rented: false, rental: {waterL: 255,waterT: 255,waterUse: 0,water: 0,powerL: 3808,powerT: 3808,powerUse: 0,power: 0,house: 1000,manage: 20,net: 0}},
{title: '104', key: '104', rented: true, rental: {waterL: 559,waterT: 559,waterUse: 0,water: 0,powerL: 1046,powerT: 1046,powerUse: 0,power: 0,house: 1300,manage: 20,net: 0}},
{title: '105', key: '105', rented: true, rental: {waterL: 305,waterT: 305,waterUse: 0,water: 0,powerL: 2365,powerT: 2365,powerUse: 0,power: 0,house: 700,manage: 20,net: 0}},
{title: '301', key: '301', rented: true, rental: {waterL: 758,waterT: 758,waterUse: 0,water: 0,powerL: 8720,powerT: 8720,powerUse: 0,power: 0,house: 1215,manage: 20,net: 0}},
{title: '302', key: '302', rented: true, rental: {waterL: 135,waterT: 135,waterUse: 0,water: 0,powerL: 4450,powerT: 4450,powerUse: 0,power: 0,house: 700,manage: 20,net: 0}},
{title: '303', key: '303', rented: true, rental: {waterL: 223,waterT: 223,waterUse: 0,water: 0,powerL: 455,powerT: 455,powerUse: 0,power: 0,house: 1300,manage: 20,net: 0}},
{title: '304', key: '304', rented: true, rental: {waterL: 286,waterT: 286,waterUse: 0,water: 0,powerL: 1195,powerT: 1195,powerUse: 0,power: 0,house: 1200,manage: 20,net: 0}},
{title: '305', key: '305', rented: true, rental: {waterL: 583,waterT: 583,waterUse: 0,water: 0,powerL: 6000,powerT: 6000,powerUse: 0,power: 0,house: 750,manage: 20,net: 0}},
{title: '306', key: '306', rented: true, rental: {waterL: 719,waterT: 719,waterUse: 0,water: 0,powerL: 9167,powerT: 9167,powerUse: 0,power: 0,house: 1380,manage: 20,net: 0}},
{title: '401', key: '401', rented: true, rental: {waterL: 173,waterT: 173,waterUse: 0,water: 0,powerL: 867,powerT: 867,powerUse: 0,power: 0,house: 1250,manage: 20,net: 0}},
{title: '402', key: '402', rented: true, rental: {waterL: 12,waterT: 12,waterUse: 0,water: 0,powerL: 4780,powerT: 4780,powerUse: 0,power: 0,house: 750,manage: 20,net: 0}},
{title: '403', key: '403', rented: true, rental: {waterL: 238,waterT: 238,waterUse: 0,water: 0,powerL: 1355,powerT: 1355,powerUse: 0,power: 0,house: 1180,manage: 20,net: 0}},
{title: '404', key: '404', rented: true, rental: {waterL: 505,waterT: 505,waterUse: 0,water: 0,powerL: 7070,powerT: 7070,powerUse: 0,power: 0,house: 1180,manage: 20,net: 0}},
{title: '405', key: '405', rented: true, rental: {waterL: 213,waterT: 213,waterUse: 0,water: 0,powerL: 5842,powerT: 5842,powerUse: 0,power: 0,house: 800,manage: 20,net: 0}},
{title: '406', key: '406', rented: true, rental: {waterL: 704,waterT: 704,waterUse: 0,water: 0,powerL: 1477,powerT: 1477,powerUse: 0,power: 0,house: 850,manage: 20,net: 0}},
{title: '407', key: '407', rented: true, rental: {waterL: 42,waterT: 42,waterUse: 0,water: 0,powerL: 848,powerT: 848,powerUse: 0,power: 0,house: 750,manage: 20,net: 0}},
{title: '501', key: '501', rented: true, rental: {waterL: 55,waterT: 55,waterUse: 0,water: 0,powerL: 4460,powerT: 4460,powerUse: 0,power: 0,house: 1180,manage: 20,net: 0}},
{title: '502', key: '502', rented: true, rental: {waterL: 152,waterT: 152,waterUse: 0,water: 0,powerL: 2990,powerT: 2990,powerUse: 0,power: 0,house: 730,manage: 20,net: 0}},
{title: '503', key: '503', rented: true, rental: {waterL: 59,waterT: 59,waterUse: 0,water: 0,powerL: 7070,powerT: 7070,powerUse: 0,power: 0,house: 1295,manage: 20,net: 0}},
{title: '504', key: '504', rented: true, rental: {waterL: 582,waterT: 582,waterUse: 0,water: 0,powerL: 6945,powerT: 6945,powerUse: 0,power: 0,house: 1300,manage: 20,net: 0}},
{title: '505', key: '505', rented: true, rental: {waterL: 404,waterT: 404,waterUse: 0,water: 0,powerL: 3545,powerT: 3545,powerUse: 0,power: 0,house: 850,manage: 20,net: 0}},
{title: '506', key: '506', rented: true, rental: {waterL: 763,waterT: 763,waterUse: 0,water: 0,powerL: 767,powerT: 767,powerUse: 0,power: 0,house: 900,manage: 20,net: 0}},
{title: '507', key: '507', rented: true, rental: {waterL: 21,waterT: 21,waterUse: 0,water: 0,powerL: 242,powerT: 242,powerUse: 0,power: 0,house: 680,manage: 20,net: 0}},
{title: '601', key: '601', rented: true, rental: {waterL: 471,waterT: 471,waterUse: 0,water: 0,powerL: 7112,powerT: 7112,powerUse: 0,power: 0,house: 1150,manage: 20,net: 0}},
{title: '602', key: '602', rented: true, rental: {waterL: 318,waterT: 318,waterUse: 0,water: 0,powerL: 3900,powerT: 3900,powerUse: 0,power: 0,house: 700,manage: 20,net: 0}},
{title: '603', key: '603', rented: true, rental: {waterL: 558,waterT: 558,waterUse: 0,water: 0,powerL: 820,powerT: 820,powerUse: 0,power: 0,house: 1250,manage: 20,net: 0}},
{title: '604', key: '604', rented: true, rental: {waterL: 502,waterT: 502,waterUse: 0,water: 0,powerL: 5590,powerT: 5590,powerUse: 0,power: 0,house: 1200,manage: 20,net: 0}},
{title: '605', key: '605', rented: true, rental: {waterL: 18,waterT: 18,waterUse: 0,water: 0,powerL: 5500,powerT: 5500,powerUse: 0,power: 0,house: 650,manage: 20,net: 0}},
{title: '606', key: '606', rented: true, rental: {waterL: 855,waterT: 855,waterUse: 0,water: 0,powerL: 468,powerT: 468,powerUse: 0,power: 0,house: 850,manage: 20,net: 0}},
{title: '607', key: '607', rented: true, rental: {waterL: 12,waterT: 12,waterUse: 0,water: 0,powerL: 225,powerT: 225,powerUse: 0,power: 0,house: 750,manage: 20,net: 0}},
{title: '701', key: '701', rented: true, rental: {waterL: 588,waterT: 588,waterUse: 0,water: 0,powerL: 1661,powerT: 1661,powerUse: 0,power: 0,house: 1180,manage: 20,net: 0}},
{title: '702', key: '702', rented: true, rental: {waterL: 332,waterT: 332,waterUse: 0,water: 0,powerL: 4295,powerT: 4295,powerUse: 0,power: 0,house: 700,manage: 20,net: 0}},
{title: '703', key: '703', rented: true, rental: {waterL: 655,waterT: 655,waterUse: 0,water: 0,powerL: 4500,powerT: 4500,powerUse: 0,power: 0,house: 1180,manage: 20,net: 0}},
{title: '704', key: '704', rented: true, rental: {waterL: 159,waterT: 159,waterUse: 0,water: 0,powerL: 3355,powerT: 3355,powerUse: 0,power: 0,house: 1050,manage: 20,net: 0}},
{title: '705', key: '705', rented: true, rental: {waterL: 199,waterT: 199,waterUse: 0,water: 0,powerL: 3710,powerT: 3710,powerUse: 0,power: 0,house: 750,manage: 20,net: 0}},
{title: '706', key: '706', rented: true, rental: {waterL: 340,waterT: 340,waterUse: 0,water: 0,powerL: 9580,powerT: 9580,powerUse: 0,power: 0,house: 1300,manage: 20,net: 0}},
{title: '801', key: '801', rented: true, rental: {waterL: 318,waterT: 318,waterUse: 0,water: 0,powerL: 3352,powerT: 3352,powerUse: 0,power: 0,house: 1080,manage: 20,net: 0}},
{title: '802', key: '802', rented: true, rental: {waterL: 202,waterT: 202,waterUse: 0,water: 0,powerL: 5091,powerT: 5091,powerUse: 0,power: 0,house: 760,manage: 20,net: 0}},
{title: '803', key: '803', rented: true, rental: {waterL: 277,waterT: 277,waterUse: 0,water: 0,powerL: 8253,powerT: 8253,powerUse: 0,power: 0,house: 1000,manage: 20,net: 0}},
{title: '804', key: '804', rented: true, rental: {waterL: 237,waterT: 237,waterUse: 0,water: 0,powerL: 5965,powerT: 5965,powerUse: 0,power: 0,house: 1100,manage: 20,net: 0}},
{title: '805', key: '805', rented: true, rental: {waterL: 447,waterT: 447,waterUse: 0,water: 0,powerL: 4461,powerT: 4461,powerUse: 0,power: 0,house: 680,manage: 20,net: 0}},
{title: '806', key: '806', rented: true, rental: {waterL: 513,waterT: 513,waterUse: 0,water: 0,powerL: 9620,powerT: 9620,powerUse: 0,power: 0,house: 1100,manage: 20,net: 0}}]
        }
    ],
    preview: []
};

const init = () => {
    let {history, single} = initialState;
    let {water, power} = single;
    power = Math.round(power);
    let lastMonth = history && history.length ? history[history.length - 1].data : [];
    let flats = [];
    for (let flat of lastMonth) {
        let {title, key, rented, rental} = flat;
        let {
            waterL,
            powerL,
            house,
            manage,
            net,
        } = rental;
        flats.push({
            title,
            key,
            rented,
            rental: {
                waterL,
                waterT: waterL,
                waterUse: 1,
                water,
                powerL,
                powerT: powerL,
                powerUse: 1,
                power,
                house,
                manage,
                net,
            }
        });
    }
    initialState.preview = flats;
}

init();

export default initialState;
