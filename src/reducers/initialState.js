import { AsyncStorage, Alert } from 'react-native';

import staticData from './staticData';

const initialState = {...staticData};

const resolvePreview = (state) => {
    let {history, single} = state;
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
    state.preview = flats;
};

resolvePreview(initialState);

export default initialState;
