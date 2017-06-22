import React, {Component} from 'react';
import {
    Text,
    View,
    SectionList,
    Picker
} from 'react-native';

import { connect } from 'react-redux';

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

const renderHeader = (props) => (
    <View>
        <Text>{typeof props}</Text>
    </View>
);

const SectionSeparator = () => (
    <View style={styles.sectionSeparator}></View>
);

class ViewScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {date: '', rentals: []};
    }

    componentWillMount() {
        this.retrieveLatest();
    }

    retrieveLatest() {
        let {history} = this.props;
        if (history && history.length) {
            let latest = history[history.length - 1];
            this.setState({date: latest.date, rentals: latest.data});
        }
    }

    changeDate(date, position) {
        this.setState({date, rentals: this.props.history[position].data || []});
    }

    render() {
        let {history} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.pickerView}>
                    <Picker style={styles.picker} mode="dropdown" onValueChange={this.changeDate.bind(this)} selectedValue={this.state.date}>
                        {history.map((item) => (<Picker.Item key={item.date} label={item.date} value={item.date} />))}
                    </Picker>
                </View>
                <SectionList
                    renderSectionHeader={renderSectionHeader}
                    SectionSeparatorComponent={SectionSeparator}
                    stickySectionHeadersEnabled={false}
                    renderListHeader={renderHeader}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemSeparator}
                    sections={this.state.rentals}/>
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

function mapStateToProps(state, ownProps) {
	return {
        history: state.history
	};
}

export default connect(mapStateToProps)(ViewScreen);
