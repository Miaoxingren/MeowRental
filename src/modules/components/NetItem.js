import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Switch,
    Alert
} from 'react-native';
import {NumInput} from '../components/Common';

import styles from '../styles/EditByNet'
import common from '../styles/Common';

export default class NetItem extends Component {
    constructor(props) {
        super(props);

        let {net} = this.props;
        this.state = { neted: net !== 0, netText: net + '' };
    }

    toggleNet(neted) {
        let {netDefault} = this.props;
        let net = neted ? netDefault : 0;
        this.setState({neted});
        this.changeNet(net + '');
    }

    changeNet(netText) {
        let net = parseInt(netText) || 0;
        this.setState({netText});
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
                <View style={[common.flexChild, styles.net, common.switch]}>
                    <Switch
                        style={common.switch}
                        onValueChange={this.toggleNet.bind(this)}
                        value={this.state.neted}
                        disabled={!rented}/>
                </View>
                <View style={[common.flexChild, styles.net]}>
                    <NumInput passNum={this.changeNet.bind(this)}
                        initVal={this.state.netText}
                        style={common.rowText}
                        editable={this.state.neted}/>
                </View>
            </View>
        );
    }
}
