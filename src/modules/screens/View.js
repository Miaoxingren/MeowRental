import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    SectionList
} from 'react-native';
import ViewItem from '../components/ViewItem';
import styles from '../styles/View';
import data from '../data';

const renderSectionHeader = ({section}) => (
    <View style={styles.section}>
        <Text style={styles.sectionText}>{section.key} 楼</Text>
    </View>
);

class SectionSeparator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.sectionSeparator}>
            </View>
        );
    }
}

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

export default class ViewScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.viewBox}>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    renderSectionHeader={renderSectionHeader}
                    SectionSeparatorComponent={SectionSeparator}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({item}) => <ViewItem title={item.title} empty={item.empty} rental={item.rental}/>}
                    sections={data}/>
            </View>
        );
    }
}
