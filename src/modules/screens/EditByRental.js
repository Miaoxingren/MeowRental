import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    Button,
    Alert
} from 'react-native';
import RentalItem from '../components/RentalItem';
import {NumInput} from '../components/Common';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import styles from '../styles/EditByRental';
import common from '../styles/Common';

import lang from '../lang';

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

    submitRental() {
        let {single, actions} = this.props;
        for (key of Object.keys(single)) {
            if (this.state[key] != single[key]) {
                actions.editSingle(key, this.state[key]);
            }
        }
        this.props.navigator.pop({
          animated: true,
          animationType: 'fade',
        });
    }

    passChange(flat, type, val) {
        this.props.actions.editRental(flat, type, val);
    }

    renderItem({item}) {
        let {title, rented, rental} = item;
        return (
            <RentalItem title={title} rented={rented} house={rental.house} passChange={this.passChange.bind(this)}/>
        );
    }

    render() {
        let {flats} = this.props;
        return (
            <View>
                <FlatList data={flats}
                    keyExtractor={keyExtractor}
                    renderItem={this.renderItem.bind(this)}/>
                <View style={common.row}>
                    <Button onPress={this.submitRental.bind(this)} title={lang.submit} color="#79B0BA" />
                </View>
            </View>
        )
    }
}

function mapStateToProps({preview}, ownProps) {
    // let lastMonth = history && history.length ? history[history.length - 1].data : [];
    // let flats = [];
    // for (floor of lastMonth) {
    //     floor.data.forEach(({title, key, rented, rental}) => {
    //         flats.push({
    //             title,
    //             key,
    //             rented,
    //             rental: {
    //                 house: rental.house
    //             }
    //         }
    //     )});
    // }
	return {
		flats: preview
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditByRentalScreen);
