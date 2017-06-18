import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import EditItem from '../components/EditItem';

import styles from '../styles/Edit';
import common from '../styles/Common';

import lang from '../lang';

export default class EditScren extends Component {
    static navs = {
        'single': {screen: 'meowrental.EditSingle', title: lang.editSingle},
        'rental': {screen: 'meowrental.EditByRental', title: lang.editByRental},
        'water': {screen: 'meowrental.EditByWater', title: lang.editByWater},
        'electric': {screen: 'meowrental.EditByElectric', title: lang.editByElectric},
        'net': {screen: 'meowrental.EditByNet', title: lang.editByNet},
    };

    constructor(props) {
        super(props);
    }

    navTo(navKey) {
        let nav = EditScren.navs[navKey];
        if (!nav) return;
        this.props.navigator.push({
            screen: nav.screen,
            title: nav.title,
            passProps: {},
            navigatorStyle: {
                tabBarHidden: true,
                navBarHidden: false,
            }
        });
    }

    render() {
        return (
            <View style={common.container}>
                <EditItem navTo={this.navTo.bind(this)} navKey='single' text={lang.editSingle} />
                <EditItem navTo={this.navTo.bind(this)} navKey='rental' text={lang.editByRental} />
                <EditItem navTo={this.navTo.bind(this)} navKey='water' text={lang.editByWater} />
                <EditItem navTo={this.navTo.bind(this)} navKey='electric' text={lang.editByElectric} />
                <EditItem navTo={this.navTo.bind(this)} navKey='net' text={lang.editByNet} />
            </View>
        );
    }

}
