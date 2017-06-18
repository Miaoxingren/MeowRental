import React, {Component} from 'react';
import {
    Text,
    View,
    SectionList
} from 'react-native';

import ViewItem from '../components/ViewItem';
import {ItemSeparator} from '../components/Common';

import styles from '../styles/View';

import data from '../data';

const renderSectionHeader = ({section}) => (
    <View style={styles.section}>
        <Text style={styles.sectionText}>{section.key} 楼</Text>
    </View>
);

const renderItem = ({item}) => (
    <ViewItem title={item.title} rented={item.rented} rental={item.rental}/>
);

const SectionSeparator = () => (
    <View style={styles.sectionSeparator}></View>
);

export default class ViewScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    renderSectionHeader={renderSectionHeader}
                    SectionSeparatorComponent={SectionSeparator}
                    stickySectionHeadersEnabled={true}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemSeparator}
                    sections={data}/>
            </View>
        );
    }
}
