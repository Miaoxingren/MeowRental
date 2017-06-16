
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
        statusBarColor: '#abc9bd',

        tabBarButtonColor: '#9aa099',
        tabBarSelectedButtonColor: '#2e291e',
        tabBarBackgroundColor: '#abc9bd',

        navBarTextColor: '#2e291e',
        navBarButtonColor: '#2e291e',
        navBarBackgroundColor: '#abc9bd',
        navBarHideOnScroll: true,

        screenBackgroundColor: '#fff',
    }
});
