import React, {Component} from 'react';
import {
    Text,
    View,
    SectionList,
    Picker,
    Alert
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as viewActions from '../../reducers/view.action';

import ViewItem from '../components/ViewItem';
import {ItemSeparator} from '../components/Common';

import styles from '../styles/View';

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

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {date: props.date};
    }

    changeDate(date, position) {
        this.setState({date});
        this.props.retrieveHistory(date);
    }

    render() {
        let {histories} = this.props;
        return (
            <View style={styles.pickerView}>
                <Picker style={styles.picker} mode="dropdown" onValueChange={this.changeDate.bind(this)} selectedValue={this.state.date}>
                    {histories.map((item) => (<Picker.Item key={item} label={item} value={item} />))}
                </Picker>
            </View>
        )
    }
}

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

    retrieveHistory(date) {
        this.props.actions.retrieveByDate(date);
    }

    render() {
        return (
            <View style={styles.container}>
                <History date={this.props.date} histories={this.props.histories} retrieveHistory={this.retrieveHistory.bind(this)} />
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

const extractDate = (rental) => (
    rental.map((item) => (
        item.date
    ))
);

const format = (obj) => {
    let str = '';
    for (key of Object.keys(obj)) {
        str += key + ' ';
    }
    return str;
}

function mapStateToProps(state, ownProps) {
    let viewState = state.view;
    let index = findAllByDate(viewState.rental, viewState.date);
	return {
		rentals: index === undefined ? [] : viewState.rental[index].data,
        date: viewState.date,
        histories: extractDate(viewState.rental),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(viewActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen);
