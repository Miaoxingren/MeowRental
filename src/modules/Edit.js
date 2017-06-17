import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
import styles from './styles/Edit';
import lang from './lang';

class EditItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.9}>
                <View style={styles.editItem}><Text style={styles.editText}>{this.props.text}</Text></View>
            </TouchableOpacity>
        );
    }
}

export default class EditScren extends Component {

    constructor(props) {
        super(props);
    }

    onPress() {
        this.props.navigator.push({
            screen: 'meowrental.Push',
            title: 'New Screen',
        });
    }

    render() {
        return (
            <View style={styles.editBox}>
                <EditItem onPress={this.onPress.bind(this)} text={lang.editSingle} />
                <EditItem onPress={this.onPress.bind(this)} text={lang.editByRental} />
                <EditItem onPress={this.onPress.bind(this)} text={lang.editByWater} />
                <EditItem onPress={this.onPress.bind(this)} text={lang.editByElectric} />
                <EditItem onPress={this.onPress.bind(this)} text={lang.editByNet} />
            </View>
        );
    }

}
