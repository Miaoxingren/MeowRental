import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import {NumInput} from '../components/Common';

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
                    <NumInput passNum={(num) => this.setState({textL: num})}
                        default={this.state.textL}
                        style={common.rowText}/>
                </View>
                <View style={styles.water}>
                    <NumInput passNum={(num) => this.setState({textT: num})}
                        default={this.state.textT}
                        style={common.rowText}/>
                </View>
            </View>
        );
    }
}
