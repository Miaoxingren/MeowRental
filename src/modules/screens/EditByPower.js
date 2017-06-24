import React, {Component} from 'react';
import {
    View,
    SectionList,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native';
import PowerItem from '../components/PowerItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import styles from '../styles/EditByPower';
import common from '../styles/Common';

import lang from '../lang';

const keyExtractor = (item, index) => item.title;

const renderSectionHeader = ({section}) => (
    <View style={[common.flexByRow, styles.headerItem]}>
        <View style={common.flexChild}><Text style={[common.rowText, styles.headerText]}>{lang.flat}</Text></View>
        <View style={[styles.power, styles.powerL]}><Text style={[common.rowText, styles.headerText]}>{lang.lastMonth}</Text></View>
        <View style={styles.power}><Text style={[common.rowText, styles.headerText]}>{lang.thisMonth}</Text></View>
    </View>
);

class EditByPowerScreen extends Component {
    constructor(props) {
        super(props);
    }

    passChange(flat, type, val) {
        let {price, actions} = this.props;
        actions.editRental(flat, type, val, price);
    }

    renderItem({item}) {
        let {title, rented, rental} = item;
        let {powerL, powerT} = rental;
        return (
            <PowerItem title={title} rented={rented} powerL={powerL} powerT={powerT} passChange={this.passChange.bind(this)}/>
        );
    }

    render() {
        let {flats} = this.props;
        return (
            <View>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    keyExtractor={keyExtractor}
                    renderSectionHeader={renderSectionHeader}
                    renderItem={this.renderItem.bind(this)}
                    sections={[{data: flats, key: 'power'}]}/>
            </View>
        )
    }
}

function mapStateToProps({single, preview}, ownProps) {
	return {
        price: single.power,
		flats: preview
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditByPowerScreen);
