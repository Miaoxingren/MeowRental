import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';
import styles from '../styles/EditSingle';
import {single} from '../data';
import lang from '../lang';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.default };
    }

    render() {
        return (
            <View style={styles.row}>
                <View style={styles.unit}><Text style={styles.unitText}>{this.props.title}</Text></View>
                <View style={styles.value}>
                    <TextInput style={styles.valueText}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}/>
                </View>
            </View>
        );
    }
}

export default class EditSingleScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Row title={lang.unit.water} default={single.water}/>
                <Row title={lang.unit.electric} default={single.electric}/>
                <Row title={lang.unit.net} default={single.net}/>
                <Row title={lang.unit.manage} default={single.manage}/>
            </View>
        );
    }
}
