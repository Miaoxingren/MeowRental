import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    Alert
} from 'react-native';
import RentalItem from '../components/RentalItem';
import {NumInput} from '../components/Common';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import styles from '../styles/EditByRental'

const keyExtractor = (item, index) => item.title;

const renderItem = ({item}) => {
    let {title, rented, rental} = item;
    return (
        <RentalItem title={title} rented={rented} house={rental.house}/>
    );
};

class EditByRentalScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {flats} = this.props;
        return (
            <View>
                <FlatList data={flats}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}/>
            </View>
        )
    }
}

function mapStateToProps({history}, ownProps) {
    let lastMonth = history && history.length ? history[history.length - 1].data : [];
    let flats = [];
    for (floor of lastMonth) {
        floor.data.forEach(({title, key, rented, rental}) => {
            flats.push({
                title,
                key,
                rented,
                rental: {
                    house: rental.house
                }
            }
        )});
    }
	return {
		flats
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditByRentalScreen);
