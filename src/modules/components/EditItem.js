import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import styles from '../styles/Edit';
import common from '../styles/Common';

export default class EditItem extends Component {
    constructor(props) {
        super(props);
    }

    onPress() {
        this.props.navTo(this.props.navKey);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress.bind(this)} activeOpacity={0.9}>
                <View style={[common.info, styles.editItem]}><Text style={common.infoText}>{this.props.text}</Text></View>
            </TouchableOpacity>
        );
    }
}
