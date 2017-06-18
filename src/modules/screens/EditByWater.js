import React, {Component} from 'react';
import {View, SectionList, Text, TextInput} from 'react-native';
import {water} from '../data';
import styles from '../styles/EditByWater'
import lang from '../lang';

const calculateWater = ({lastMonth, thisMonth}) => (
    Math.round((thisMonth - lastMonth) * 1.3)
);

class WaterItem extends Component {
    constructor(props) {
        super(props);
        this.state = { textL: this.props.waterL, textT: this.props.waterT };
    }

    render() {
        return (
            <View style={styles.waterItem}>
                <View style={styles.flat}><Text style={styles.text}>{this.props.title}</Text></View>
                <View style={[styles.water, styles.waterL]}>
                    <TextInput style={styles.text}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        onChangeText={(textL) => this.setState({textL})}
                        value={this.state.textL}/>
                </View>
                <View style={styles.water}>
                    <TextInput style={styles.text}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        onChangeText={(textT) => this.setState({textT})}
                        value={this.state.textT}/>
                </View>
            </View>
        );
    }
}

const renderSectionHeader = ({section}) => (
    <View style={[styles.waterItem, styles.headerItem]}>
        <View style={styles.flat}><Text style={[styles.text, styles.headerText]}>{lang.flat}</Text></View>
        <View style={[styles.water, styles.waterL]}><Text style={[styles.text, styles.headerText]}>{lang.lastMonth}</Text></View>
        <View style={styles.water}><Text style={[styles.text, styles.headerText]}>{lang.thisMonth}</Text></View>
    </View>
);

export default class EditByWater extends Component {
    constructor(props) {
        super(props);
    }
    _keyExtractor = (item, index) => item.key;
    _renderItem = ({item}) => (<WaterItem title={item.title} key={item.key} waterL={item.waterL} waterT={item.waterT}/>);

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    renderSectionHeader={renderSectionHeader}
                    renderItem={({item}) => <WaterItem title={item.title} key={item.key} waterL={item.waterL} waterT={item.waterT}/>}
                    sections={[{data: water, key: 'water'}]}/>
            </View>
        )
    }
}
