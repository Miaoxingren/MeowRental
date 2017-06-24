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
        let {waterL, waterT} = this.props;
        this.state = { waterL, waterT };
    }

    changeWaterL(waterL) {
        this.setState({waterL});
        this.changeValue('waterL', waterL);
    }

    changeWaterT(waterT) {
        this.setState({waterT});
        this.changeValue('waterT', waterT);
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
                <View style={[styles.water, styles.waterL]}>
                    <NumInput passNum={this.changeWaterL.bind(this)}
                        initVal={this.state.waterL}
                        style={common.rowText}/>
                </View>
                <View style={styles.water}>
                    <NumInput passNum={this.changeWaterT.bind(this)}
                        initVal={this.state.waterT}
                        style={common.rowText}/>
                </View>
            </View>
        );
    }
}
