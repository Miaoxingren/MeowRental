import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';
import {ItemSeparator, NumInput} from '../components/Common';

import styles from '../styles/EditSingle';
import common from '../styles/Common';

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
                <View style={common.info}><Text style={common.infoText}>{this.props.title}</Text></View>
                <View style={styles.value}>
                    <NumInput
                        passNum={(text) => this.setState({text})}
                        default={this.state.text}/>
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
            <View style={common.container}>
                <Row title={lang.unit.water} default={single.water}/>
                <ItemSeparator />
                <Row title={lang.unit.electric} default={single.electric}/>
                <ItemSeparator />
                <Row title={lang.unit.net} default={single.net}/>
                <ItemSeparator />
                <Row title={lang.unit.manage} default={single.manage}/>
            </View>
        );
    }
}
