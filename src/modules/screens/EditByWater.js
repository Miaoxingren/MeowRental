import React, {Component} from 'react';
import {
    View,
    SectionList,
    Text,
    TextInput
} from 'react-native';
import WaterItem from '../components/WaterItem';

import styles from '../styles/EditByWater';
import common from '../styles/Common';

import lang from '../lang';

import {water} from '../data';

const calculateWater = ({lastMonth, thisMonth}) => (
    Math.round((thisMonth - lastMonth) * 1.3)
);

const renderSectionHeader = ({section}) => (
    <View style={[common.flexByRow, styles.headerItem]}>
        <View style={common.flexChild}><Text style={[common.rowText, styles.headerText]}>{lang.flat}</Text></View>
        <View style={[styles.water, styles.waterL]}><Text style={[common.rowText, styles.headerText]}>{lang.lastMonth}</Text></View>
        <View style={styles.water}><Text style={[common.rowText, styles.headerText]}>{lang.thisMonth}</Text></View>
    </View>
);

const renderItem = ({item}) => (
    <WaterItem title={item.title} key={item.key} waterL={item.waterL} waterT={item.waterT}/>
);

export default class EditByWater extends Component {
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
                    sections={[{data: water, key: 'water'}]}/>
            </View>
        )
    }
}
