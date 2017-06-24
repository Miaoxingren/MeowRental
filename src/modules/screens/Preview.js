import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';

import { connect } from 'react-redux';

import ViewItem from '../components/ViewItem';
import {ItemSeparator} from '../components/Common';

import styles from '../styles/View';

const renderItem = ({item}) => (
    <ViewItem title={item.title} rented={item.rented} rental={item.rental}/>
);

const renderHeader = () => (1);

const keyExtractor = (item, index) => item.title;

class PreviewScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {date: '', rentals: []};
    }

    render() {
        let {preview} = this.props;
        return (
            <View style={styles.container}>
                <FlatList data={preview}
                    keyExtractor={keyExtractor}
                    renderListHeader={renderHeader}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemSeparator}/>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
	return {
        preview: state.preview
	};
}

export default connect(mapStateToProps)(PreviewScreen);
