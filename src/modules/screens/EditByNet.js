import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    TextInput
} from 'react-native';
import NetItem from '../components/NetItem';

import styles from '../styles/EditByNet'

import {net} from '../data';

const keyExtractor = (item, index) => item.key;

const renderItem = ({item}) => (
    <NetItem title={item.title} key={item.key} net={item.net}/>
);

export default class EditByNet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <FlatList data={net}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}/>
            </View>
        )
    }
}
