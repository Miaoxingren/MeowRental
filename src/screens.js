import { Navigation } from 'react-native-navigation';

import View from './modules/screens/View';
import Preview from './modules/screens/Preview';
import Edit from './modules/screens/Edit';
import EditSingle from './modules/screens/EditSingle';
import EditByHouse from './modules/screens/EditByHouse';
import EditByNet from './modules/screens/EditByNet';
import EditByWater from './modules/screens/EditByWater';
import EditByPower from './modules/screens/EditByPower';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
    Navigation.registerComponent('meowrental.View', () => View, store, Provider);
    Navigation.registerComponent('meowrental.Preview', () => Preview, store, Provider);
    Navigation.registerComponent('meowrental.Edit', () => Edit, store, Provider);
    Navigation.registerComponent('meowrental.EditSingle', () => EditSingle, store, Provider);
    Navigation.registerComponent('meowrental.EditByHouse', () => EditByHouse, store, Provider);
    Navigation.registerComponent('meowrental.EditByNet', () => EditByNet, store, Provider);
    Navigation.registerComponent('meowrental.EditByWater', () => EditByWater, store, Provider);
    Navigation.registerComponent('meowrental.EditByPower', () => EditByPower, store, Provider);
}
