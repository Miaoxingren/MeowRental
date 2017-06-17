import React, {Component} from 'react';
import {View, FlatList, Text, TextInput} from 'react-native';
import {net} from '../data';
import styles from '../styles/EditByNet'

class NetItem extends Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.net };
    }

    render() {
        return (
            <View style={styles.netItem}>
                <View style={styles.flat}><Text style={styles.text}>{this.props.title}</Text></View>
                <View style={styles.net}>
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

export default class EditByNet extends Component {
    constructor(props) {
        super(props);
    }
    _keyExtractor = (item, index) => item.key;
    _renderItem = ({item}) => (<NetItem title={item.title} key={item.key} net={item.net}/>);

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={net}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}/>
            </View>
        )
    }
}
