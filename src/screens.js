import { Navigation } from 'react-native-navigation';

import View from './modules/screens/View';
import Edit from './modules/screens/Edit';
import EditSingle from './modules/screens/EditSingle';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('meowrental.View', () => View);
    Navigation.registerComponent('meowrental.Edit', () => Edit);
    Navigation.registerComponent('meowrental.EditSingle', () => EditSingle);
}
