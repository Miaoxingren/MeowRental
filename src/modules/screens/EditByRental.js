import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import RentalItem from '../components/RentalItem';
import {NumInput} from '../components/Common';

import styles from '../styles/EditByRental'

import {rental} from '../data';

const keyExtractor = (item, index) => item.key;

const renderItem = ({item}) => (
    <RentalItem title={item.title} rental={item.rental} rented={item.rented}/>
);

export default class EditByRental extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <FlatList data={rental}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}/>
            </View>
        )
    }
}
