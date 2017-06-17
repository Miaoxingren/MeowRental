import React, {Component} from 'react';
import {View, FlatList, Text, TextInput} from 'react-native';
import {rental} from '../data';
import styles from '../styles/EditByRental'

class RentalItem extends Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.rental };
    }

    render() {
        return (
            <View style={styles.rentalItem}>
                <View style={styles.flat}><Text style={styles.text}>{this.props.title}</Text></View>
                <View style={styles.rental}>
                    <TextInput style={styles.text}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}/>
                </View>
            </View>
        );
    }
}

export default class EditByRental extends Component {
    constructor(props) {
        super(props);
    }
    _keyExtractor = (item, index) => item.key;
    _renderItem = ({item}) => (<RentalItem title={item.title} key={item.key} rental={item.rental}/>);

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={rental}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}/>
            </View>
        )
    }
}
