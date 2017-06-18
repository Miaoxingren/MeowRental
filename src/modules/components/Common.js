import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    SectionList
} from 'react-native';

import styles from '../styles/Common';

const ItemSeparator = () => (
    <View style={styles.separatorBox}>
        <View style={styles.separator}></View>
        <View style={styles.separator}></View>
    </View>
);

export {ItemSeparator};
