import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    SectionList
} from 'react-native';
import styles from '../styles/Common';

class ItemSeparator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.separatorBox}>
                <View style={styles.separator}></View>
                <View style={styles.separator}></View>
            </View>
        );
    }
}

export {ItemSeparator};
