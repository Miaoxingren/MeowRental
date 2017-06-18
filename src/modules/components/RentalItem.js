import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Switch
} from 'react-native';

import {NumInput} from '../components/Common';

import styles from '../styles/EditByRental';
import common from '../styles/Common';

export default class RentalItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.rental,
            rented:true,
        };
    }

    togglesRented(rented) {
        this.setState({rented})
    }

    render() {
        return (
            <View style={common.flexByRow}>
                <View style={common.flexChild}>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
                <View style={common.flexChild}>
                    <Switch
                        style={common.switch}
                        onValueChange={this.togglesRented.bind(this)}
                        value={this.state.rented}/>
                </View>
                <View style={styles.rental}>
                    <NumInput passNum={(num) => this.setState({num})}
                        default={this.state.num}
                        style={styles.text}/>
                </View>
            </View>
        );
    }
}
