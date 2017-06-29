import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import HouseItem from '../components/HouseItem';
import {NumInput} from '../components/Common';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import styles from '../styles/EditByHouse';
import common from '../styles/Common';

import lang from '../lang';

const keyExtractor = (item, index) => item.title;

class ListHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {flat: ''};
    }

    onChangeFlat(flat) {
        this.setState({flat});
    }

    addFlat() {
        let {flat} = this.state;
        if (flat) {
            this.props.addFlat(flat);
        }
    }

    render() {
        let addIcon = require('../../img/add.png');
        return (
            <View style={styles.listHeader}>
                <View style={styles.inputBox}>
                    <TextInput style={[common.numInput, styles.input]}
                        maxLength={20}
                        underlineColorAndroid='transparent'
                        onChangeText={this.onChangeFlat.bind(this)}
                        value={this.state.flat}/>
                </View>
                <View style={styles.addBox}>
                    <TouchableOpacity onPress={this.addFlat.bind(this)} activeOpacity={0.9}>
                        <Image style={styles.img} source={addIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class EditByHouseScreen extends Component {
    constructor(props) {
        super(props);
    }

    passChange(flat, type, val) {
        this.props.actions.editRental(flat, type, val);
    }

    renderItem({item}) {
        let {title, rented, rental} = item;
        return (
            <HouseItem title={title} rented={rented} house={rental.house} passChange={this.passChange.bind(this)} removeFlat={this.removeFlat.bind(this)}/>
        );
    }

    addFlat(flat) {
        this.props.actions.addFlat(flat);
    }

    removeFlat(flat) {
        this.props.actions.removeFlat(flat);
    }

    renderListHeader() {
        return (<ListHeader addFlat={this.addFlat.bind(this)}/>);
    }

    render() {
        let {flats} = this.props;
        return (
            <View>
                <FlatList data={flats}
                    keyExtractor={keyExtractor}
                    ListHeaderComponent={this.renderListHeader.bind(this)}
                    renderItem={this.renderItem.bind(this)}/>
            </View>
        )
    }
}

function mapStateToProps({preview}, ownProps) {
	return {
		flats: preview
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditByHouseScreen);
