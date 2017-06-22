import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';

import styles from '../styles/Common';

const ItemSeparator = () => (
    <View style={styles.separatorBox}>
        <View style={styles.separator}></View>
        <View style={styles.separator}></View>
    </View>
);

class NumInput extends Component {
    constructor(props) {
        super(props);
        this.state = { num: this.props.default };
    }

    onChangeNum(num) {
        if (/^(\d+\.)?\d+$/.test(num) || /^\d+\.$/.test(num) || !num) {
            this.setState({num});
            this.props.passNum(num);
        }
    }

    render() {
        let textStyle = this.props.editable === false ? {color: '#eee'} : {};
        return (
            <TextInput style={[styles.numInput, this.props.style, textStyle]}
                maxLength={6}
                underlineColorAndroid='transparent'
                keyboardType='numeric'
                onChangeText={this.onChangeNum.bind(this)}
                value={this.state.num}
                editable={this.props.editable}/>
        );
    }
}

export {ItemSeparator, NumInput};
