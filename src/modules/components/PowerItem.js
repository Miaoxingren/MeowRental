import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import {NumInput} from '../components/Common';

import styles from '../styles/EditByPower';
import common from '../styles/Common';

export default class PowerItem extends Component {
    constructor(props) {
        super(props);
        let {powerL, powerT} = this.props;
        this.state = { powerL, powerT };
    }

    changePowerL(powerL) {
        this.setState({powerL});
        this.changeValue('powerL', powerL);
    }

    changePowerT(powerT) {
        this.setState({powerT});
        this.changeValue('powerT', powerT);
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
                <View style={[styles.power, styles.powerL]}>
                    <NumInput passNum={this.changePowerL.bind(this)}
                        initVal={this.state.powerL}
                        style={common.rowText}/>
                </View>
                <View style={styles.power}>
                    <NumInput passNum={this.changePowerT.bind(this)}
                        initVal={this.state.powerT}
                        style={common.rowText}/>
                </View>
            </View>
        );
    }
}
