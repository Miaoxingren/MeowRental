import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import {NumInput} from '../components/Common';

import styles from '../styles/EditByElectric';
import common from '../styles/Common';

export default class ElectricItem extends Component {
    constructor(props) {
        super(props);
        this.state = { textL: this.props.electricL, textT: this.props.electricT };
    }

    render() {
        return (
            <View style={common.flexByRow}>
                <View style={common.flexChild}>
                    <Text style={common.rowText}>{this.props.title}</Text>
                </View>
                <View style={[styles.electric, styles.electricL]}>
                    <NumInput passNum={(num) => this.setState({textL: num})}
                        default={this.state.textL}
                        style={common.rowText}/>
                </View>
                <View style={styles.electric}>
                    <NumInput passNum={(num) => this.setState({textT: num})}
                        default={this.state.textT}
                        style={common.rowText}/>
                </View>
            </View>
        );
    }
}
