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
        this.state = { net: this.props.net };
    }

    toggleNet(neted) {
        this.setState({neted, net: neted ? 50 : 0});
    }

    render() {
        return (
            <View style={common.flexByRow}>
                <View style={common.flexChild}>
                    <Text style={common.rowText}>{this.props.title}</Text>
                </View>
                <View style={styles.net}>
                    <Switch
                        style={common.switch}
                        onValueChange={this.toggleNet.bind(this)}
                        value={this.state.neted}/>
                </View>
            </View>
        );
    }
}
