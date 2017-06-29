import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Switch
} from 'react-native';

import styles from '../styles/EditByNet'
import common from '../styles/Common';

export default class NetItem extends Component {
    constructor(props) {
        super(props);

        let {net} = this.props;
        this.state = { net, neted: net === 50 };
    }

    toggleNet(neted) {
        let net = neted ? 50 : 0;
        this.setState({neted, net});
        this.changeValue('net', net);
    }

    changeValue(type, val) {
        let {title, passChange} = this.props;
        passChange(title, type, val);
    }

    render() {
        let {rented} = this.props;
        return (
            <View style={common.flexByRow}>
                <View style={common.flexChild}>
                    <Text style={common.rowText}>{this.props.title}</Text>
                </View>
                <View style={[styles.net, common.switch]}>
                    <Switch
                        style={common.switch}
                        onValueChange={this.toggleNet.bind(this)}
                        value={this.state.neted}
                        disabled={!rented}/>
                </View>
            </View>
        );
    }
}
