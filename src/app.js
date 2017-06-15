
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
    tabsStyle: {
        tabBarBackgroundColor: '#003a66',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        navigationBarColor: '#003a66',
        navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'BioRhyme-Bold',
    },
    appStyle: {
        tabBarBackgroundColor: '#003a66',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        navigationBarColor: '#003a66',
        navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'BioRhyme-Bold',
    // },
    // drawer: {
    //     left: {
    //         screen: 'example.Types.Drawer'
    //     }
    }
});
