import { Navigation } from 'react-native-navigation';

import View from './modules/screens/View';
import Edit from './modules/screens/Edit';
import EditSingle from './modules/screens/EditSingle';
import EditByRental from './modules/screens/EditByRental';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('meowrental.View', () => View);
    Navigation.registerComponent('meowrental.Edit', () => Edit);
    Navigation.registerComponent('meowrental.EditSingle', () => EditSingle);
    Navigation.registerComponent('meowrental.EditByRental', () => EditByRental);
}
