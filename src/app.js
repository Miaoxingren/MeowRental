
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

const tabs = [{
    label: '查看',
    screen: 'meowrental.View',
    icon: require('./img/view.png'),
    title: '查看房租',
}, {
    label: '编辑',
    screen: 'meowrental.Edit',
    icon: require('./img/edit.png'),
    title: '编辑房租',
}];

// this will start our app
Navigation.startTabBasedApp({
    tabs,
    appStyle: {
        statusBarColor: '#79B0BA',

        tabBarButtonColor: '#426C68',
        tabBarSelectedButtonColor: '#252A1E',
        tabBarBackgroundColor: '#79B0BA',

        navBarTextColor: '#252A1E',
        navBarButtonColor: '#252A1E',
        navBarBackgroundColor: '#79B0BA',
        navBarHideOnScroll: true,

        screenBackgroundColor: '#eee',
    }
});
