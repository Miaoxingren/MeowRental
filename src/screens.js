import { Navigation } from 'react-native-navigation';

import View from './modules/View';
import Edit from './modules/Edit';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('meowrental.View', () => View);
    Navigation.registerComponent('meowrental.Edit', () => Edit);
    Navigation.registerComponent('meowrental.EditSingle', () => View);
}
