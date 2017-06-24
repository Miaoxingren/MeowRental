import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    Alert
} from 'react-native';
import HouseItem from '../components/HouseItem';
import {NumInput} from '../components/Common';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import styles from '../styles/EditByHouse';

import lang from '../lang';

const keyExtractor = (item, index) => item.title;

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
            <HouseItem title={title} rented={rented} house={rental.house} passChange={this.passChange.bind(this)}/>
        );
    }

    render() {
        let {flats} = this.props;
        return (
            <View>
                <FlatList data={flats}
                    keyExtractor={keyExtractor}
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
