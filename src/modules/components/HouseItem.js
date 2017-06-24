import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Switch,
    Alert
} from 'react-native';

import {NumInput} from '../components/Common';

import styles from '../styles/EditByHouse';
import common from '../styles/Common';

export default class HouseItem extends Component {
    constructor(props) {
        super(props);
        let {house, rented} = this.props;
        this.state = {
            house,
            rented,
        };
    }

    toggleRented(rented) {
        this.setState({rented});
        this.changeValue('rented', rented);
    }

    changeHouse(house) {
        this.setState({house});
        this.changeValue('house', house);
    }

    changeValue(type, val) {
        let {title, passChange} = this.props;
        passChange(title, type, val);
    }

    render() {
        return (
            <View style={common.flexByRow}>
                <View style={common.flexChild}>
                    <Text style={common.rowText}>{this.props.title}</Text>
                </View>
                <View style={common.flexChild}>
                    <Switch
                        style={common.switch}
                        onValueChange={this.toggleRented.bind(this)}
                        value={this.state.rented}/>
                </View>
                <View style={styles.rental}>
                    <NumInput passNum={this.changeHouse.bind(this)}
                        initVal={this.state.house}
                        style={common.rowText}
                        editable={this.state.rented}/>
                </View>
            </View>
        );
    }
}
