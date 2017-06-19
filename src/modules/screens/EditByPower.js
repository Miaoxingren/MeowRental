import React, {Component} from 'react';
import {
    View,
    SectionList,
    Text,
    TextInput
} from 'react-native';
import PowerItem from '../components/PowerItem';

import styles from '../styles/EditByPower';
import common from '../styles/Common';

import lang from '../lang';

import {power} from '../data';

const calculatePower = ({lastMonth, thisMonth}) => (
    Math.round((thisMonth - lastMonth) * 8)
);

const renderSectionHeader = ({section}) => (
    <View style={[common.flexByRow, styles.headerItem]}>
        <View style={common.flexChild}><Text style={[common.rowText, styles.headerText]}>{lang.flat}</Text></View>
        <View style={[styles.power, styles.powerL]}><Text style={[common.rowText, styles.headerText]}>{lang.lastMonth}</Text></View>
        <View style={styles.power}><Text style={[common.rowText, styles.headerText]}>{lang.thisMonth}</Text></View>
    </View>
);

const renderItem = ({item}) => (
    <PowerItem title={item.title} key={item.key} powerL={item.powerL} powerT={item.powerT}/>
);

export default class EditByPower extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    renderSectionHeader={renderSectionHeader}
                    renderItem={renderItem}
                    sections={[{data: power, key: 'power'}]}/>
            </View>
        )
    }
}
