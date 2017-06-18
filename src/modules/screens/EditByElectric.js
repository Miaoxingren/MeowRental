import React, {Component} from 'react';
import {
    View,
    SectionList,
    Text,
    TextInput
} from 'react-native';
import ElectricItem from '../components/ElectricItem';

import styles from '../styles/EditByElectric';
import common from '../styles/Common';

import lang from '../lang';

import {electric} from '../data';

const calculateElectric = ({lastMonth, thisMonth}) => (
    Math.round((thisMonth - lastMonth) * 8)
);

const renderSectionHeader = ({section}) => (
    <View style={[common.flexByRow, styles.headerItem]}>
        <View style={common.flexChild}><Text style={[common.rowText, styles.headerText]}>{lang.flat}</Text></View>
        <View style={[styles.electric, styles.electricL]}><Text style={[common.rowText, styles.headerText]}>{lang.lastMonth}</Text></View>
        <View style={styles.electric}><Text style={[common.rowText, styles.headerText]}>{lang.thisMonth}</Text></View>
    </View>
);

const renderItem = ({item}) => (
    <ElectricItem title={item.title} key={item.key} electricL={item.electricL} electricT={item.electricT}/>
);

export default class EditByElectric extends Component {
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
                    sections={[{data: electric, key: 'electric'}]}/>
            </View>
        )
    }
}
