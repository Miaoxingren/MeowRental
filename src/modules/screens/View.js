import React, {Component} from 'react';
import {
    Text,
    View,
    SectionList,
    Alert
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as viewActions from '../../reducers/view.action';

import ViewItem from '../components/ViewItem';
import {ItemSeparator} from '../components/Common';

import styles from '../styles/View';

import data from '../data';

const renderSectionHeader = ({section}) => (
    <View style={styles.section}>
        <Text style={styles.sectionText}>{section.key} 楼</Text>
    </View>
);

const renderItem = ({item}) => (
    <ViewItem title={item.title} rented={item.rented} rental={item.rental}/>
);

const SectionSeparator = () => (
    <View style={styles.sectionSeparator}></View>
);

class ViewScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
		this._retrieveLatest();
	}

    componentDidMount() {
		this._retrieveLatest();
	}

    _retrieveLatest() {
		this.props.actions.retrieveLatest();
	}

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    renderSectionHeader={renderSectionHeader}
                    SectionSeparatorComponent={SectionSeparator}
                    stickySectionHeadersEnabled={true}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemSeparator}
                    sections={this.props.rentals}/>
            </View>
        );
    }
}

const findAllByDate = (rental, date) => {
    for (let i = 0; i < rental.length; i++) {
        if (rental[i].date === date) {
            return i;
        }
    }
};

const format = (obj) => {
    let str = '';
    for (key of Object.keys(obj)) {
        str += key + ' ';
    }
    return str;
}

function mapStateToProps(state, ownProps) {
    let index = findAllByDate(state.view.rental, state.view.date);
	return {
		rentals: index === undefined ? [] : state.view.rental[index].data,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(viewActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen);
