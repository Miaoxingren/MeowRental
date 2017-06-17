import { Navigation } from 'react-native-navigation';

import View from './modules/screens/View';
import Edit from './modules/screens/Edit';
import EditSingle from './modules/screens/EditSingle';
import EditByRental from './modules/screens/EditByRental';
import EditByNet from './modules/screens/EditByNet';
import EditByWater from './modules/screens/EditByWater';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('meowrental.View', () => View);
    Navigation.registerComponent('meowrental.Edit', () => Edit);
    Navigation.registerComponent('meowrental.EditSingle', () => EditSingle);
    Navigation.registerComponent('meowrental.EditByRental', () => EditByRental);
    Navigation.registerComponent('meowrental.EditByNet', () => EditByNet);
    Navigation.registerComponent('meowrental.EditByWater', () => EditByWater);
}
