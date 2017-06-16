import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Button,
    SectionList
} from 'react-native';
import data from './data';
import ViewItem from './components/ViewItem';
import styles from './styles/View';

const renderSectionHeader = ({section}) => (
    <View style={styles.section}>
        <Text style={styles.sectionText}>{section.key} 楼</Text>
    </View>
);

export default class ViewScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    renderSectionHeader={renderSectionHeader}
                    renderItem={({item}) => <ViewItem title={item.title} empty={item.empty} rental={item.rental} />}
                    sections={data}
                />
            </View>
        );
    }

}
