import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

import styles from '../styles/EditByWater';
import common from '../styles/Common';

export default class WaterItem extends Component {
    constructor(props) {
        super(props);
        this.state = { textL: this.props.waterL, textT: this.props.waterT };
    }

    render() {
        return (
            <View style={common.flexByRow}>
                <View style={common.flexChild}>
                    <Text style={common.rowText}>{this.props.title}</Text>
                </View>
                <View style={[styles.water, styles.waterL]}>
                    <TextInput style={common.rowText}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        onChangeText={(textL) => this.setState({textL})}
                        value={this.state.textL}/>
                </View>
                <View style={styles.water}>
                    <TextInput style={common.rowText}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        onChangeText={(textT) => this.setState({textT})}
                        value={this.state.textT}/>
                </View>
            </View>
        );
    }
}
